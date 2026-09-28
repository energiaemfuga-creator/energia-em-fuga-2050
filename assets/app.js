// INICIAR MISSÃO
function iniciarMissao() {

    const campoEquipe = document.getElementById("nomeEquipe");

    if (!campoEquipe) {
        return;
    }

    const nomeEquipe = campoEquipe.value.trim();

    if (nomeEquipe === "") {
        alert("Digite o nome da equipe para iniciar a missão.");
        return;
    }

    localStorage.setItem("nomeEquipe", nomeEquipe);
    localStorage.setItem("inicioMissao", Date.now());

    window.location.href = "sala1.html";
}


// VERIFICAR SALA 1
function verificarSala1() {

    const respostas = [
        document.getElementById("fonte1").value,
        document.getElementById("fonte2").value,
        document.getElementById("fonte3").value,
        document.getElementById("fonte4").value,
        document.getElementById("fonte5").value,
        document.getElementById("fonte6").value
    ];

    const respostaCorreta = [
        "R",
        "R",
        "R",
        "R",
        "N",
        "N"
    ];

    const feedback = document.getElementById("feedback");
    const codigo = document.getElementById("codigo");

    // Verifica se todas as respostas foram preenchidas
    for (let i = 0; i < respostas.length; i++) {

        if (respostas[i] === "") {

            feedback.textContent =
                "⚠️ Complete todas as respostas antes de verificar.";

            feedback.className = "feedback error";

            return;
        }
    }

    // Verifica as respostas
    let acertou = true;

    for (let i = 0; i < respostas.length; i++) {

        if (respostas[i] !== respostaCorreta[i]) {
            acertou = false;
        }
    }

    // Se acertou
    if (acertou === true) {

        feedback.textContent =
            "✅ CORRETO! O código da Sala 1 foi liberado.";

        feedback.className = "feedback success";

        codigo.classList.remove("hidden");

        localStorage.setItem("sala1Concluida", "true");
        localStorage.setItem("codigoSala1", "07");

    }

    // Se errou
    else {

        feedback.textContent =
            "❌ Resposta incorreta. Revise as fontes e tente novamente.";

        feedback.className = "feedback error";

        codigo.classList.add("hidden");
    }
}


// IR PARA SALA 2
function irParaSala2() {

    window.location.href = "sala2.html";

}
