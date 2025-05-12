function contarTexto() {
    const texto = document.getElementById("texto").value.trim();
    const palavras = texto.split(/\s+/).filter(p => p.length > 0);
    const quantidadePalavras = palavras.length;
    const letras = texto.replace(/\s/g, "");
    const quantidadeLetras = letras.length;
    document.getElementById("resultado").innerHTML = `
      <p><strong>Palavras:</strong> ${quantidadePalavras}</p>
      <p><strong>Letras:</strong> ${quantidadeLetras}</p>
    `;
  }
  