function sortear() {
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);
  
    if (isNaN(min) || isNaN(max) || min >= max) {
      document.getElementById("resultado").innerText = "Informe um intervalo válido (mínimo menor que o máximo).";
      return;
    }
  
    const sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("resultado").innerText = "Número sorteado: " + sorteado;
  }
  