// ===============================
// INICIAR MISSÃO
// ===============================

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


// ===============================
// SALA 1
// ===============================

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

    for (let i = 0; i < respostas.length; i++) {

        if (respostas[i] === "") {

            feedback.textContent =
                "⚠️ Complete todas as respostas antes de verificar.";

            feedback.className = "feedback error";

            return;
        }
    }

    let acertou = true;

    for (let i = 0; i < respostas.length; i++) {

        if (respostas[i] !== respostaCorreta[i]) {
            acertou = false;
        }
    }

    if (acertou === true) {

        feedback.textContent =
            "✅ CORRETO! O código da Sala 1 foi liberado.";

        feedback.className = "feedback success";

        codigo.classList.remove("hidden");

        localStorage.setItem("sala1Concluida", "true");
        localStorage.setItem("codigoSala1", "07");

    } else {

        feedback.textContent =
            "❌ Resposta incorreta. Revise as fontes e tente novamente.";

        feedback.className = "feedback error";

        codigo.classList.add("hidden");
    }
}


function irParaSala2() {

    window.location.href = "sala2.html";

}


// ===============================
// SALA 2
// ===============================

function verificarSala2() {

    // ===============================
    // ETAPA 1 — IDENTIFICAR OS ODS
    // ===============================

    const respostas = [
        document.getElementById("pistaA").value,
        document.getElementById("pistaB").value,
        document.getElementById("pistaC").value,
        document.getElementById("pistaD").value,
        document.getElementById("pistaE").value,
        document.getElementById("pistaF").value
    ];

    const respostasCorretas = [
        "7",
        "9",
        "12",
        "13",
        "5",
        "14"
    ];

    const feedback = document.getElementById("feedback2");
    const codigo = document.getElementById("codigo2");


    // ===============================
    // VERIFICAR CAMPOS VAZIOS
    // ===============================

    for (let i = 0; i < respostas.length; i++) {

        if (respostas[i] === "") {

            feedback.textContent =
                "⚠️ Complete todas as associações da Etapa 1.";

            feedback.className = "feedback error";

            return;
        }
    }


    // ===============================
    // VERIFICAR ETAPA 1
    // ===============================

    let etapa1Correta = true;

    for (let i = 0; i < respostas.length; i++) {

        if (respostas[i] !== respostasCorretas[i]) {

            etapa1Correta = false;

        }
    }


    if (etapa1Correta === false) {

        feedback.textContent =
            "❌ Uma ou mais associações estão incorretas. Analise novamente as pistas.";

        feedback.className = "feedback error";

        codigo.classList.add("hidden");

        return;
    }


    // ===============================
    // ETAPA 2 — SELECIONAR OS ODS
    // ===============================

    const ods5 = document.getElementById("ods5").checked;
    const ods7 = document.getElementById("ods7").checked;
    const ods9 = document.getElementById("ods9").checked;
    const ods12 = document.getElementById("ods12").checked;
    const ods13 = document.getElementById("ods13").checked;
    const ods14 = document.getElementById("ods14").checked;


    const quantidadeSelecionada =
        [ods5, ods7, ods9, ods12, ods13, ods14]
        .filter(Boolean).length;


    // ===============================
    // VERIFICAR QUANTIDADE
    // ===============================

    if (quantidadeSelecionada !== 4) {

        feedback.textContent =
            "❌ Selecione exatamente quatro ODS.";

        feedback.className = "feedback error";

        codigo.classList.add("hidden");

        return;
    }


    // ===============================
    // VERIFICAR SELEÇÃO
    // ===============================

    const etapa2Correta =
        ods7 &&
        ods9 &&
        ods12 &&
        ods13 &&
        !ods5 &&
        !ods14;


    if (etapa2Correta === false) {

        feedback.textContent =
            "❌ A seleção não corresponde ao protocolo energético. Revise os temas indicados.";

        feedback.className = "feedback error";

        codigo.classList.add("hidden");

        return;
    }


    // ===============================
    // TUDO CORRETO
    // ===============================

    feedback.textContent =
        "✅ CORRETO! O protocolo energético foi identificado.";

    feedback.className = "feedback success";

    codigo.classList.remove("hidden");

    localStorage.setItem("sala2Concluida", "true");
    localStorage.setItem("codigoSala2", "B1");

}


function irParaSala3() {

    window.location.href = "sala3.html";

}
