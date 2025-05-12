function simularCaixa() {
    var valor = parseInt(document.getElementById('valor').value);
    var resultadoDiv = document.getElementById('resultado');
    
    resultadoDiv.innerHTML = '';
    
    if (isNaN(valor) || valor <= 0) {
        resultadoDiv.innerHTML = 'Por favor, digite um valor válido maior que 0.';
        return;
    }

    var notas = [100, 50, 10, 1];
    var quantidadeNotas = [];
    
    for (let i = 0; i < notas.length; i++) {
        quantidadeNotas[i] = Math.floor(valor / notas[i]);
        valor = valor % notas[i];
    }

    if (quantidadeNotas[0] > 0) {
        resultadoDiv.innerHTML += `Notas de R$100: ${quantidadeNotas[0]}<br>`;
    }
    if (quantidadeNotas[1] > 0) {
        resultadoDiv.innerHTML += `Notas de R$50: ${quantidadeNotas[1]}<br>`;
    }
    if (quantidadeNotas[2] > 0) {
        resultadoDiv.innerHTML += `Notas de R$10: ${quantidadeNotas[2]}<br>`;
    }
    if (quantidadeNotas[3] > 0) {
        resultadoDiv.innerHTML += `Notas de R$1: ${quantidadeNotas[3]}<br>`;
    }
}
