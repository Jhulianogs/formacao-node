var calculadora = require('./calculadora');


console.log(calculadora.name);
console.log(calculadora.soma(10, 40));
console.log(calculadora.mult(10, 20));
console.log(calculadora.sub(100, 20));
console.log(calculadora.div(10, 20));
calculadora.name = "Nova calculadora";
console.log(calculadora.name);