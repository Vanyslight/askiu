const questionForm = document.getElementById("question-form");
const duvidaTextarea = document.getElementById("duvida");
const sucessoModal = new bootstrap.Modal(
  document.getElementById("sucessoModal")
);

console.log("Script da API de CEP carregado.");

const cepInput = document.getElementById("cep-input");

if (cepInput) {
  console.log('Campo "cep-input" encontrado no HTML.');

  cepInput.addEventListener("blur", function () {
    console.log("EVENTO BLUR (clique fora) FUNCIONOU!");
    let cep = this.value.replace(/\D/g, "");
    console.log("CEP digitado (limpo):", cep);

    if (cep.length === 8) {
      console.log("CEP tem 8 dígitos. Tentando chamar a API...");

      document.getElementById("logradouro").value = "...buscando";
      document.getElementById("bairro").value = "...buscando";
      document.getElementById("municipio").value = "...buscando";

      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
          console.log("API respondeu!", response);
          if (!response.ok) {
            throw new Error("Erro na rede: " + response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Dados recebidos:", data);

          if (data.erro) {
            console.error("API retornou um erro: CEP não encontrado");
            alert("CEP não encontrado.");
            // Limpa os campos após erro
            document.getElementById("logradouro").value = "";
            document.getElementById("bairro").value = "";
            document.getElementById("municipio").value = "";
          } else {
            console.log("Preenchendo campos...");
            document.getElementById("logradouro").value = data.logradouro;
            document.getElementById("bairro").value = data.bairro;
            document.getElementById("municipio").value = data.localidade;
            console.log("Campos preenchidos com sucesso!");
          }
        })
        .catch((error) => {
          console.error("ERRO GRAVE NO FETCH (chamada da API):", error);
          alert("Houve um erro ao buscar o CEP. Verifique o console.");
        });
    } else {
      console.warn("CEP inválido (não tem 8 dígitos)");
    }
  });
} else {
  console.error(
    'ERRO CRÍTICO: Não foi possível encontrar o <input> com id="cep-input"' // Ajuste na mensagem de erro
  );
}

questionForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const novaDuvida = duvidaTextarea.value.trim();

  if (novaDuvida === "") {
    alert("Por favor, escreva sua dúvida.");
    return;
  }

  const duvida = {
    id: Date.now(),
    texto: novaDuvida,
    data: new Date().toLocaleDateString("pt-BR"),
    resolvida: false,
    municipio: document.getElementById("municipio").value,
    cep: cepInput.value,
  };

  let listaDuvidas = JSON.parse(localStorage.getItem("duvidasAskiu")) || [];

  listaDuvidas.push(duvida);

  localStorage.setItem("duvidasAskiu", JSON.stringify(listaDuvidas));

  duvidaTextarea.value = "";
  document.getElementById("municipio").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("logradouro").value = "";
  document.getElementById("cep-input").value = "";
  document.getElementById("numero").value = "";
  questionForm.style.display = "none";
  sucessoModal.show();
});

document
  .getElementById("sucessoModal")
  .addEventListener("hidden.bs.modal", function () {
    questionForm.style.display = "block";
  });
