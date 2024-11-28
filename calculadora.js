// calculadora.js

document.getElementById('calculadoraForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener los valores del formulario
    var agua = parseFloat(document.getElementById('agua').value);
    var gas = parseFloat(document.getElementById('gas').value);
    var kw = parseFloat(document.getElementById('kw').value);

    // Tarifas (en pesos colombianos)
    var tarifaAgua = 5000; // Tarifa por metro cúbico de agua
    var tarifaGas = 8000;  // Tarifa por metro cúbico de gas
    var tarifaKW = 1000;   // Tarifa por kilowatt consumido

    // Calcular el total
    var totalAgua = agua * tarifaAgua;
    var totalGas = gas * tarifaGas;
    var totalKW = kw * tarifaKW;

    var total = totalAgua + totalGas + totalKW;

    // Mostrar el resultado
    document.getElementById('resultado').textContent = 'El total de su factura es: ' + total.toLocaleString() + ' COP';
});
