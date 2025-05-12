function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('operacao').value;
    const resultado = document.getElementById('resultado');
  
    if (isNaN(num1) || isNaN(num2)) {
      resultado.innerHTML = "Digite dois números válidos.";
      resultado.style.color = 'red';
      return;
    }
  
    let total;
  
    switch (operacao) {
      case 'soma':
        total = num1 + num2;
        break;
      case 'subtracao':
        total = num1 - num2;
        break;
      case 'multiplicacao':
        total = num1 * num2;
        break;
      case 'divisao':
        if (num2 === 0) {
          resultado.innerHTML = "Não é possível dividir por zero.";
          resultado.style.color = 'red';
          return;
        }
        total = num1 / num2;
        break;
      default:
        resultado.innerHTML = "Operação inválida.";
        resultado.style.color = 'red';
        return;
    }
  
    resultado.style.color = '#333';
    resultado.innerHTML = `Resultado: ${total}`;
  }
  