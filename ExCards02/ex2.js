
function contar() {
    const inicio = document.getElementById('inicio').value;
    const fim = document.getElementById('fim').value;
    const passo = document.getElementById('passo').value;
    const resultado = document.getElementById('resultado');
  
    // Verificar se todos os campos estão preenchidos
    if (inicio === '' || fim === '' || passo === '') {
      resultado.innerHTML = 'Por favor, preencha todos os campos.';
      resultado.style.color = 'red';
      return;
    }
  
    // Converter para números
    let i = Number(inicio);
    let f = Number(fim);
    let p = Number(passo);
  
    if (p <= 0) {
      resultado.innerHTML = 'Passo inválido! Usando passo 1.';
      p = 1;
    }
  
    let contagem = '';
  
    if (i < f) {
      // Contagem crescente
      for (let c = i; c <= f; c += p) {
        contagem += c + ' → ';
      }
    } else {
      // Contagem decrescente
      for (let c = i; c >= f; c -= p) {
        contagem += c + ' → ';
      }
    }
  
    resultado.style.color = '#333';
    resultado.innerHTML = 'Contagem: <br>' + contagem.slice(0, -3) + '.';
  }
  