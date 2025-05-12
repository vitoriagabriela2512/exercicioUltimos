function mudarCor(cor) {
    const semaforo = document.getElementById('semaforo');
  
    // Remove todas as classes de cor
    semaforo.classList.remove('vermelho', 'amarelo', 'verde');
  
    // Adiciona a classe correspondente à cor selecionada
    semaforo.classList.add(cor);
  }
  