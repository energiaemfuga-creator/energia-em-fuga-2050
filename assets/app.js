function iniciarMissao() {
    const nomeEquipe = document.getElementById("nomeEquipe").value.trim();

    if (nomeEquipe === "") {
        alert("Digite o nome da equipe para iniciar a missão.");
        return;
    }

    localStorage.setItem("nomeEquipe", nomeEquipe);
    localStorage.setItem("inicioMissao", Date.now());

    window.location.href = "sala1.html";
} 
function verificarSala1() {

    const resposta = [
        document.getElementById("fonte1").value,
        document.getElementById("fonte2").value,
        document.getElementById("fonte3").value,
        document.getElementById("fonte4").value,
        document.getElementById("fonte5").value,
        document.getElementById("fonte6").value
    ];

    const correta = ["R", "R", "R", "R", "N", "N"];

    const feedback = document.getElementById("feedback");
    const codigo = document.getElementById("codigo");

    if (resposta.includes("")) {
        feedback.textContent = "⚠️ Complete todas as respostas antes de verificar.";
        feedback.className = "feedback error";
        return;
    }

    const acertou = resposta.every(
        (valor, indice) => valor === correta[indice]
    );

    if (acertou) {

        feedback.textContent = "✅ Resposta correta! O sistema liberou o código da Sala 1.";
        feedback.className = "feedback success";

        codigo.classList.remove("hidden");

        localStorage.setItem("sala1Concluida", "true");
        localStorage.setItem("codigoSala1", "07");

    } else {

        feedback.textContent = "❌ Há respostas incorretas. Tente novamente.";
        feedback.className = "feedback error";

        codigo.classList.add("hidden");
    }
}


function irParaSala2() {
    window.location.href = "sala2.html";
}
console.log("APP.JS DA ENERGIA EM FUGA FOI CARREGADO");
