function verificarIdade() {
    const anoNascimento = parseInt(document.getElementById('anoNascimento').value);
    const resultado = document.getElementById('resultado');
    const anoAtual = new Date().getFullYear();
  
    if (isNaN(anoNascimento) || anoNascimento > anoAtual || anoNascimento < 1900) {
      resultado.style.color = 'red';
      resultado.innerHTML = "Por favor, digite um ano de nascimento válido.";
      return;
    }
  
    const idade = anoAtual - anoNascimento;
    let classificacao = '';
  
    if (idade < 18) {
      classificacao = 'menor de idade';
    } else if (idade < 60) {
      classificacao = 'adulto(a)';
    } else {
      classificacao = 'idoso(a)';
    }
  
    resultado.style.color = '#333';
    resultado.innerHTML = `Você tem ${idade} anos e é considerado ${classificacao}.`;
  }
  