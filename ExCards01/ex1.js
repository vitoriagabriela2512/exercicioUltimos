
function verificar() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultado.textContent = "Por favor, digite um número válido.";
        resultado.style.color = "red";
    } else if (numero % 2 == 0) {
        resultado.textContent = `${numero} é um número PAR.`;
        resultado.style.color = "green";
    } else {
        resultado.textContent = `${numero} é um número ÍMPAR.`;
        resultado.style.color = "blue";
    }
}