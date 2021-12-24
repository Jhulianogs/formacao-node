function soma(a, b) {
    return a + b;
}

function mult(a, b) {
    return a * b;
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}

var name = 'Calculadora';

module.exports = {
    soma,
    mult,
    sub,
    div,
    name
}