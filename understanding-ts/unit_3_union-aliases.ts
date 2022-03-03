//Los alias como el siguiente nos permiten crear interfaces personalizados para tareas especificas en nuestro codigo 
type Combinable = number | string;
//es posible tambien crear alias conteniendo union interfaces para evitar repeticion en el codigo
type ConversionDescriptor = 'as-number' | 'as-string' ;
//tampoco nos encontramos limitados a union interfaces, podemos crear cosas mas complejas como objets que eviten repeticion o nos permitan centralizar los tipos en el codigo como en el ejemplo siguiente
type User = { name: string; age: number };



//union interfaces son declaraciones de multiples interfaces de data que va a poder aceptar el input.
function combine(
    input1: Combinable,
    input2: Combinable,
    // resultConversion : string
    resultConversion : ConversionDescriptor //<-- los literal types nos permiten limitar el tipo de valores que puede recibir las funciones como estamos haciendo en este caso donde no solo el la funcion debe recibir un string, sino que este debe tener uno de estos dos valores, de lo contrario TS lanzara el error al compilar. 

    ){
    let result: Combinable;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number')
{   result = +input1 + +input2
    } else {
        result = input1.toString() + input2.toString();
    };
    // if (resultConversion === 'as-number'){
    //     return +result
    // } else {
    //     return result.toString()
    // }
    return result
}

const combinedAges = combine(30, 54, 'as-number');
console.log(combinedAges);

const combinedNames = combine("luis ", "alberto", "as-string")
console.log(combinedNames);

const combinedAgesString = combine("30", "25", 'as-number')
console.log(combinedAgesString)

const number21 = 2.8
//Typescript en constantes no demuestra interface de la variable, sino el valor dado que el valor no cambiara, se toma 