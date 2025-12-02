const questionsContainer = document.getElementById("questions-container");

function loadDuvidas() {
  let listaDuvidas = JSON.parse(localStorage.getItem("duvidasAskiu")) || [];

  if (listaDuvidas.length === 0) {
    questionsContainer.innerHTML =
      '<p class="text-center text-muted mt-5">Nenhuma dúvida publicada ainda. Seja o primeiro!</p>';
    return;
  }

  questionsContainer.innerHTML = "";

  listaDuvidas.forEach((duvida) => {
    const cardHtml = `
      <div class="question-card">
        <h3 class="question-title">${duvida.texto}</h3>
        <span class="question-date">
          <i class="bi bi-calendar-event"></i> ${duvida.data}
        </span>
        <div class="text-end">
          <a
            href="#"
            class="btn btn-responder"
            data-bs-toggle="modal"
            data-bs-target="#respostaModal"
          >
            RESPONDER
          </a>
        </div>
      </div>
    `;
    questionsContainer.innerHTML += cardHtml;
  });
}

loadDuvidas();

const respostaModalEl = document.getElementById("respostaModal");
const respostaSucessoModalEl = document.getElementById("respostaSucessoModal");
const btnEnviarResposta = document.getElementById("btn-enviar-resposta");

if (btnEnviarResposta && respostaModalEl && respostaSucessoModalEl) {
  const respostaModal = new bootstrap.Modal(respostaModalEl);
  const respostaSucessoModal = new bootstrap.Modal(respostaSucessoModalEl);

  btnEnviarResposta.addEventListener("click", () => {
    respostaModal.hide();

    setTimeout(() => {
      respostaSucessoModal.show();
    }, 150);
  });
}
