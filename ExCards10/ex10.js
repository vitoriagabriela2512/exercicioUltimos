function converterTemperatura(unidade) {
    const temperaturaCelsius = parseFloat(document.getElementById("temperatura").value);
    let resultado;
  
    if (isNaN(temperaturaCelsius)) {
      alert("Por favor, insira um valor válido para a temperatura.");
      return;
    }
  
    if (unidade === "fahrenheit") {
      resultado = (temperaturaCelsius * 9/5) + 32;
      document.getElementById("resultadoTexto").innerText = `${temperaturaCelsius}°C é igual a ${resultado.toFixed(2)}°F.`;
    } else if (unidade === "kelvin") {
      resultado = temperaturaCelsius + 273.15;
      document.getElementById("resultadoTexto").innerText = `${temperaturaCelsius}°C é igual a ${resultado.toFixed(2)}K.`;
    }
  }
  
  