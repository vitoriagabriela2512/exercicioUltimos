function gerarSenha() {
    const tamanho = document.getElementById("tamanho").value;
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=[]{}|<>?";
    let senha = "";
  
    if (tamanho < 4 || tamanho > 30) {
      document.getElementById("resultado").innerText = "Digite um tamanho entre 4 e 30.";
      return;
    }
  
    for (let i = 0; i < tamanho; i++) {
      const index = Math.floor(Math.random() * caracteres.length);
      senha += caracteres[index];
    }
  
    document.getElementById("resultado").innerText = "Senha gerada: " + senha;
  }
  