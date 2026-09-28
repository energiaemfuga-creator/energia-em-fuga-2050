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
