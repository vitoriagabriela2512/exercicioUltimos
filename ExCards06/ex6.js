function gerarTabuada() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');
  
    if (isNaN(numero)) {
      resultado.style.color = 'red';
      resultado.innerHTML = "Por favor, digite um número válido.";
      return;
    }
  
    let tabuada = '';
    for (let i = 1; i <= 10; i++) {
      tabuada += `${numero} x ${i} = ${numero * i}<br>`;
    }
  
    resultado.style.color = '#333';
    resultado.innerHTML = tabuada;
  }
  