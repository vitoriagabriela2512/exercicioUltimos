function adicionarItem() {
    const input = document.getElementById('itemInput');
    const lista = document.getElementById('lista');
    const itemTexto = input.value.trim();
  
    if (itemTexto === '') return;
  
    const li = document.createElement('li');
    li.innerHTML = `
      ${itemTexto}
      <button onclick="removerItem(this)">Remover</button>
    `;
    lista.appendChild(li);
    input.value = '';
    input.focus();
  }
  
  function removerItem(botao) {
    const li = botao.parentElement;
    li.remove();
  }
  