// Agrega el valor al display
function appendValue(value) {
    document.getElementById("display").value += value;
}

// Limpia el display
function clearDisplay() {
    document.getElementById("display").value = '';
}

// Elimina el último caracter del display
function deleteLast() {
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
}

// Realiza el cálculo
function calculate() {
    let result = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(result);
    } catch (error) {
        document.getElementById("display").value = 'Error';
    }
}
