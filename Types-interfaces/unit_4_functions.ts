//En funciones podemos agregar el tipo de resultado esperado del retorno de esta, mas no se considera buena practica porque limita la flexibilidad de nuestro codigo a la hora de hacer refactorizacion.
function add(n1: number, n2: number): number {
    return n1 + n2;
}
//en esta funcion el interface de retorno que esperamos es "void" porque esta funcion solo imprime en la consola los resultados de lo que se le envia, no tiene retorno (teoricamente retorna undefined pero typescript hace una diferenciacion entre ambos y si deseamos que poner "undefined" como interface, tendremos que incluir un return vacio)
function printResult(num:number): void{
    console.log('result: ' +num);
}
//FUNCTION TYPES
printResult(add(4, 12));
//function types son interfaces que delimita los parametros que puede aceptar una funcion y que debe ofrecer como retorno. como podemos ver en la siguiente variable.
let combineValues: (a: number, b:number) => number
//si asignamos a esta variable la funcion add, typescript no nos deberia dar problema alguno ya que posee los parametros especificados y los valores de retorno que podemos esperar de esta.
combineValues = add;
//si volvemos a intentarlo con printResult nos vemos con una serie de problemas como lo es el retorno de la funcion esta establecido como "void" y al mismo tiempo solo toma una variable numerica como argumento.

//CALLBACKS
//si queremos queremos especificar lo que debe aceptar como parametros y retornar un callback podemos declararlo en los argumentos de la siguiente manera

function addAndHandle(n1: number, n2: number, cb: (num:number)=> void){
    const result = n1 + n2;
    cb(result)
}

// si tratamos de invocar la funcion de la siguiente manera
// addAndHandle(10, 20, (result, 2)=>{ console.log(result)})
// typescript nos va a señalar los errores que se presentan en los parametros pues esta esperando solo un argumento por lo que debemos invocar la funcion tal cual esta planteada originalmente.

// si intentamos invocar esta funcion de la siguiente manera
// addAndHandle(10, 20, (result)=>{ return results})
// a pesar que indicamos que esperamos que no haya retorno a la hora de invocar esta funcion typescript adredemente lo deja pasar porque insinuamos que se ignoraria el resultado de la funcion que escribimos y al mismo tiempo no hariamos nada con el retorno de esta.

addAndHandle(10, 20, (result)=>{ console.log(result)})
