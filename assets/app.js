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

    // -------------------------------
    // ETAPA 1 — IDENTIFICAR OS ODS
    // -------------------------------

    const respostasPistas = [
        document.getElementById("pistaA").value,
        document.getElementById("pistaB").value,
        document.getElementById("pistaC").value,
        document.getElementById("pistaD").value,
        document.getElementById("pistaE").value,
        document.getElementById("pistaF").value
    ];

    const respostaPistasCorreta = [
        "7",
        "9",
        "12",
        "13",
        "4",
        "14"
    ];


    // -------------------------------
    // ETAPA 3 — SEQUÊNCIA
    // -------------------------------

    const ordem = [
        document.getElementById("ordem1").value,
        document.getElementById("ordem2").value,
        document.getElementById("ordem3").value,
        document.getElementById("ordem4").value
    ];

    const ordemCorreta = [
        "7",
        "9",
        "12",
        "13"
    ];


    const feedback = document.getElementById("feedback2");
    const codigo = document.getElementById("codigo2");


    // -------------------------------
    // VERIFICAR CAMPOS VAZIOS
    // -------------------------------

    for (let i = 0; i < respostasPistas.length; i++) {

        if (respostasPistas[i] === "") {

            feedback.textContent =
                "⚠️ Complete a Etapa 1 antes de verificar.";

            feedback.className = "feedback error";

            return;
        }
    }


    for (let i = 0; i < ordem.length; i++) {

        if (ordem[i] === "") {

            feedback.textContent =
                "⚠️ Complete a Etapa 3 antes de verificar.";

            feedback.className = "feedback error";

            return;
        }
    }


    // -------------------------------
    // VERIFICAR ETAPA 1
    // -------------------------------

    let pistasCorretas = true;

    for (let i = 0; i < respostasPistas.length; i++) {

        if (respostasPistas[i] !== respostaPistasCorreta[i]) {

            pistasCorretas = false;
        }
    }


    if (pistasCorretas === false) {

        feedback.textContent =
            "❌ Há pelo menos uma associação incorreta. Revise as pistas e tente novamente.";

        feedback.className = "feedback error";

        codigo.classList.add("hidden");

        return;
    }


    // -------------------------------
    // VERIFICAR ETAPA 2
    // -------------------------------

    const selecionados = [

        document.getElementById("ods7").checked,
        document.getElementById("ods9").checked,
        document.getElementById("ods12").checked,
        document.getElementById("ods13").checked,
        document.getElementById("ods4").checked,
        document.getElementById("ods14").checked

    ];


    const quantidadeSelecionada =
        selecionados.filter(Boolean).length;


    if (quantidadeSelecionada !== 4) {

        feedback.textContent =
            "❌ Você precisa selecionar exatamente quatro ODS.";

        feedback.className = "feedback error";

        codigo.classList.add("hidden");

        return;
    }


    const selecaoCorreta =
        document.getElementById("ods7").checked &&
        document.getElementById("ods9").checked &&
        document.getElementById("ods12").checked &&
        document.getElementById("ods13").checked &&
        !document.getElementById("ods4").checked &&
        !document.getElementById("ods14").checked;


    if (selecaoCorreta === false) {

        feedback.textContent =
            "❌ Os quatro ODS selecionados não correspondem ao protocolo energético.";

        feedback.className = "feedback error";

        codigo.classList.add("hidden");

        return;
    }


    // -------------------------------
    // VERIFICAR ETAPA 3
    // -------------------------------

    let sequenciaCorreta = true;

    for (let i = 0; i < ordem.length; i++) {

        if (ordem[i] !== ordemCorreta[i]) {

            sequenciaCorreta = false;
        }
    }


    if (sequenciaCorreta === false) {

        feedback.textContent =
            "❌ A sequência está incorreta. Releia a lógica do protocolo.";

        feedback.className = "feedback error";

        codigo.classList.add("hidden");

        return;
    }


    // -------------------------------
    // TUDO CORRETO
    // -------------------------------

    feedback.textContent =
        "✅ CORRETO! As três etapas foram concluídas.";

    feedback.className = "feedback success";

    codigo.classList.remove("hidden");

    localStorage.setItem("sala2Concluida", "true");
    localStorage.setItem("codigoSala2", "B1");

}


function irParaSala3() {

    window.location.href = "sala3.html";

}
