function clearScreen() {
    document.getElementById("result").value = "";
}

function insert(value) {
    document.getElementById("result").value += value;
}

function deleteChar() {
    let currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
}

function calculate() {
    let expression = document.getElementById("result").value;
    try {
        let result = eval(expression);
        document.getElementById("result").value = result;
    } catch {
        document.getElementById("result").value = "Error";
    }
}
