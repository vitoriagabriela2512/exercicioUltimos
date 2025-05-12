let numeroSecreto = Math.floor(Math.random() * 100) + 1;

function verificarPalpite() {
  const palpite = parseInt(document.getElementById("palpite").value);
  const mensagem = document.getElementById("mensagem");

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    mensagem.innerText = "Digite um número válido entre 1 e 100.";
    return;
  }

  if (palpite < numeroSecreto) {
    mensagem.innerText = "Tente um número maior.";
  } else if (palpite > numeroSecreto) {
    mensagem.innerText = "Tente um número menor.";
  } else {
    mensagem.innerText = "Parabéns! Você acertou!";
  }
}
