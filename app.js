// converter.js

document.getElementById('convertBtn').addEventListener('click', convertTemperature);

function convertTemperature() {
    const tempValue = parseFloat(document.getElementById('temperatureInput').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let convertedTemp;

    if (isNaN(tempValue)) {
        document.getElementById('output').innerText = 'Please enter a valid number.';
        return;
    }

    // Conversion logic
    if (inputUnit === outputUnit) {
        convertedTemp = tempValue;
    } else if (inputUnit === 'Celsius') {
        if (outputUnit === 'Fahrenheit') {
            convertedTemp = (tempValue * 9/5) + 32;
        } else if (outputUnit === 'Kelvin') {
            convertedTemp = tempValue + 273.15;
        }
    } else if (inputUnit === 'Fahrenheit') {
        if (outputUnit === 'Celsius') {
            convertedTemp = (tempValue - 32) * 5/9;
        } else if (outputUnit === 'Kelvin') {
            convertedTemp = ((tempValue - 32) * 5/9) + 273.15;
        }
    } else if (inputUnit === 'Kelvin') {
        if (outputUnit === 'Celsius') {
            convertedTemp = tempValue - 273.15;
        } else if (outputUnit === 'Fahrenheit') {
            convertedTemp = ((tempValue - 273.15) * 9/5) + 32;
        }
    }

    // Display result
    document.getElementById('output').innerText = `Converted Temperature: ${convertedTemp.toFixed(2)} °${outputUnit[0]}`;
    
    // Update history
    const historyDiv = document.getElementById('history');
    const newHistoryEntry = document.createElement('p');
    newHistoryEntry.innerText = `${tempValue} °${inputUnit[0]} → ${convertedTemp.toFixed(2)} °${outputUnit[0]}`;
    historyDiv.appendChild(newHistoryEntry);
}
