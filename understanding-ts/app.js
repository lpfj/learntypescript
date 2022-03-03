//En funciones podemos agregar el tipo de resultado esperado del retorno de esta, mas no se considera buena practica porque limita la flexibilidad de nuestro codigo a la hora de hacer refactorizacion.
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('result: ' + num);
}
printResult(add(4, 12));
