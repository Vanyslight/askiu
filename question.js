console.log("Script da API de CEP carregado.");

const cepInput = document.getElementById("cep");

if (cepInput) {
  console.log('Campo "cep" encontrado no HTML.');

  cepInput.addEventListener("blur", function () {
    console.log("EVENTO BLUR (clique fora) FUNCIONOU!");
    let cep = this.value.replace(/\D/g, "");
    console.log("CEP digitado (limpo):", cep);

    if (cep.length === 8) {
      console.log("CEP tem 8 dígitos. Tentando chamar a API...");

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
    'ERRO CRÍTICO: Não foi possível encontrar o <input> com id="cep"'
  );
}
