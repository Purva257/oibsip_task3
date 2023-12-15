function validateInput() {
    let temperatureInput = document.getElementById('temperature').value;
    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        document.getElementById('temperature').value = '';
    }
}

function convertTemperature() {
    let temperatureInput = parseFloat(document.getElementById('temperature').value);
    let unit = document.getElementById('unit').value;
    let resultElement = document.getElementById('result');
    
    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        document.getElementById('temperature').value = '';
        resultElement.innerHTML = '';
        return;
    }

    let convertedTemperature;
    let resultUnit;

    switch (unit) {
        case 'celsius':
            convertedTemperature = (temperatureInput * 9/5) + 32;
            resultUnit = 'Fahrenheit';
            break;
        case 'fahrenheit':
            convertedTemperature = (temperatureInput - 32) * 5/9;
            resultUnit = 'Celsius';
            break;
        case 'kelvin':
            convertedTemperature = temperatureInput + 273.15;
            resultUnit = 'Kelvin';
            break;
        default:
            break;
    }

    resultElement.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
}
