var credits = new Array(24, 24, 28, 28, 26, 24, 20);
var form = document.getElementById('input-form');
var initializer = document.getElementById('gen-form');
var CGPA = document.getElementById('result');

initializer.addEventListener("submit", function (e) {
    e.preventDefault();
    form.innerHTML = `<input id='submit-button' type="submit" name="Submit">`;
    initFields();
});

form.addEventListener("submit", function (e) {
    e.preventDefault();
    calculateCGPA();
});

function createDiv(sem) {
    let newDiv = document.createElement("div");
    let newLabel = document.createElement("label");
    let newInputField = document.createElement("input");
    let textNode = document.createTextNode(`Enter SGPA for Semester ${sem}: `);
    newInputField.type = "number";
    newInputField.step = "0.01";
    newInputField.min = "1.00";
    newInputField.max = "10.00";
    newInputField.classList.add("sem-input-field");
    newLabel.appendChild(textNode);
    newLabel.appendChild(newInputField);
    newDiv.appendChild(newLabel);
    console.log(newDiv);
    return newDiv;
}

function initFields() {
    let size = document.getElementById('sem-count').value;
    let lastNode = document.getElementById('submit-button');
    for (let i = 0; i < size; i++) {
        let newNode = createDiv(i + 1);
        form.insertBefore(newNode, lastNode);
    }
}

function aggregrate(credits, max) {
    var sum = 0;
    for (var i = 0; i < max; i++) {
        sum += credits[i];
    }
    return sum;
}

function calculateCGPA() {
    let sem_count = document.getElementById('sem-count').value;
    let numerator = 0.0;
    let fields = document.getElementsByClassName('sem-input-field');

    let scores = new Array();

    for (let i = 0; i < fields.length; i++) {
        if (fields[i].value != "")
            scores.push(fields[i].value);
    }

    const creditAggregrate = aggregrate(credits, sem_count);
    for (let i = 0; i < sem_count; i++) {
        numerator += (credits[i] * scores[i]);
    }
    const result = numerator / creditAggregrate;
    CGPA.innerText = 'CGPA: ' + result.toFixed(2);
}