//Aqui se esta asignando en la funcion los tipos de input que puede recibir la funcion en orden de asegurar que esta pueda dar el resultado esperado.
function add(n1: number , n2: number, showResult: boolean, phrase: string){
//Si hicieramos esto en javascript convencional se podria generar un if statement para asegurarnos que de no recibir los inputs correctos la funcion cree un error mas con typescript en el desarrollo no es necesario.
    // if (typeof n1 !== 'number' || typeof n2 !== 'number'){
    //     throw new Error('incorrect input!')
    // }
//Aqui se esta creando una funcion la cual un boolean esta dictando la posibilidad de imprimir los resultados en la consola, de no cumplirse la condicion la funcion solo retornara los resultados 
    let result = n1 + n2
        if(showResult){
        console.log(phrase + result )
    } else {

        return n1+n2;
    }
}

const number1 = 5;

const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is..."

const result = add(number1, number2, printResult, resultPhrase);