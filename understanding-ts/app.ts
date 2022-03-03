//UNKNOWN
//Este tipo de interface cuando es asignada a una variable viene a ser por que en desarrollo de desconoce lo que se almacenara en esta.
let userInput: unknown; 

//en ella multiples tipos de informacion puede ser almacenada
userInput = 5;
userInput = "Luis"

//pero cuando deseamos inicializar una nueva variable
let userName: string;
//y asignarle el valor de userInput esta nos lanzara error porque userInput ha sido catalogado como unknow en el desarrollo.
if (typeof userInput === 'string') {
    userName = userInput;
}
// mas si se hace un chequeo de la variable que esta siendo almacenada actualmente, typescript entendera que el valor que ha sido asignado a esta variable ha cambiado y por ende no lanzara error

//ANY VS UNKNOWN

//unknown termina siendo la opcion superior a any porque a pesar que se desconoce que se va a almacenar en la variable podemos delimitar esto eventualmente mediante chequeos y no se tiene la variable sin regulacion.

//NEVER

//Es un interface usado comunmente para funciones que no retornan algo, ni un valor de retorno por lo que se usan comunmente para denotar que de esta funcion se espera recibir error


function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code}
}
const result = generateError("An error ocurred!", 500)

console.log(result);

//