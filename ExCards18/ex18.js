function validarCadastro() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const mensagem = document.getElementById("mensagem");
  
    if (!nome || !email || !senha) {
      mensagem.innerHTML = "<p>Preencha todos os campos!</p>";
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      mensagem.innerHTML = "<p>Digite um e-mail válido!</p>";
      return;
    }
  
    mensagem.innerHTML = `<p>Cadastro realizado com sucesso!</p>`;
  }
  