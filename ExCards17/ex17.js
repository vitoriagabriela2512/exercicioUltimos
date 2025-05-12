function verificarPrimo() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(numero) || numero < 1) {
      resultado.innerHTML = "<p>Digite um número inteiro positivo maior que 0.</p>";
      return;
    }
  
    if (numero === 1) {
      resultado.innerHTML = "<p>1 não é primo.</p>";
      return;
    }
  
    let ehPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        ehPrimo = false;
        break;
      }
    }
  
    if (ehPrimo) {
      resultado.innerHTML = `<p><strong>${numero}</strong> é um número primo </p>`;
    } else {
      resultado.innerHTML = `<p><strong>${numero}</strong> não é um número primo </p>`;
    }
  }
  