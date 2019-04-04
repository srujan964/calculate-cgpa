var credits = new Array(24, 24, 28, 28, 26);
var scores = new Array();
const reducer = (accumulator, currentValue) => accumulator + currentValue;

function calculateCGPA() {
    scores[0] = document.getElementById('input-one');
    scores[1] = document.getElementById('input-two');
    scores[2] = document.getElementById('input-three');
    scores[3] = document.getElementById('input-four');
    scores[4] = document.getElementById('input-five');
    let numer = 0.0;
    const sum = credits.reduce(reducer);
    for (var i = 0; i < credits.length; i++) {
        numer += (credits[i] * scores[i].value);
    }
    const result = numer / sum;
    document.getElementById('result').innerText = 'CGPA: ' + result.toFixed(2);
}