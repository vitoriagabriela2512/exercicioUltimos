function verificarPalindromo() {
    const texto = document.getElementById('texto').value;
    const resultado = document.getElementById('resultado');
  
    if (texto.trim() === '') {
      resultado.style.color = 'red';
      resultado.innerText = 'Digite algo para verificar.';
      return;
    }
  
    // Remove espaços, pontuação e acentos, e converte para minúsculas
    const formatado = texto
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]/g, '');
  
    const reverso = formatado.split('').reverse().join('');
  
    if (formatado && formatado === reverso) {
      resultado.style.color = 'green';
      resultado.innerText = `"${texto}" é um palíndromo!`;
    } else {
      resultado.style.color = 'darkred';
      resultado.innerText = `"${texto}" não é um palíndromo.`;
    }
  }
  