document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Impede reload, só chega aqui se for válido
    console.log("Formulário válido! Enviando...");

    const refFeedback = document.getElementById('feedback');

    fetch(event.target.action, {
        method: 'POST',
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then((response) => {
        if (response.ok) {
            refFeedback.style.display = "block";
            event.target.reset();
            setTimeout(() => refFeedback.style.display = "none", 5000);
        } else {
            alert("Ocorreu um erro ao enviar a mensagem.");
        }
    }).catch(() => {
        alert("Não foi possível enviar a mensagem. Verifique sua conexão.");
    });
});

// # Verifica se foi especificado algo como query-params.
const params = new URLSearchParams(window.location.search);
console.log(params)
if(params.get("section") === "privacy-terms")
    ShowTermosPrivacidade(true);

function ShowTermosPrivacidade(flag)
{
    const bgBlock = document.getElementById("bg-block");
    const term = document.getElementById("term-privacity");

    bgBlock.style.display = flag ? "block" : "none";
    term.style.display = flag ? "block" : "none";
}