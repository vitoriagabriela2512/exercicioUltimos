let votos = {
    Frango: 0,
    Carne: 0,
    Cogumelo: 0
  };
  
  function votar() {
    const opcao = document.querySelector('input[name="voto"]:checked');
    if (!opcao) {
      alert("Selecione uma opção para votar.");
      return;
    }
  
    votos[opcao.value]++;
    mostrarResultado();
  }
  
  function mostrarResultado() {
    const total = votos.Frango + votos.Carne + votos.Cogumelo;
  
    const resultado = `
      <p>Total de votos: ${total}</p>
      <p>Frango: ${votos.Frango} (${((votos.Frango / total) * 100).toFixed(1)}%)</p>
      <p>Carne: ${votos.Carne} (${((votos.Carne / total) * 100).toFixed(1)}%)</p>
      <p>Cogumelo: ${votos.Cogumelo} (${((votos.Cogumelo / total) * 100).toFixed(1)}%)</p>
    `;
  
    document.getElementById("resultado").innerHTML = resultado;
  }
  