function calcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
      resultado.innerText = "Por favor, digite todas as notas.";
      return;
    }
  
    const media = (nota1 + nota2 + nota3) / 3;
  
    if (media >= 7) {
      resultado.innerText = "Aprovado! Média: " + media.toFixed(2);
    } else if (media >= 4) {
      resultado.innerText = "Recuperação! Média: " + media.toFixed(2);
    } else {
      resultado.innerText = "Reprovado! Média: " + media.toFixed(2);
    }
  }
  