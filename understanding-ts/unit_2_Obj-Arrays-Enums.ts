//Aun que esto es posible no es la convencion usar typescript de esta forma en este contexto pues es mejor dejar que interfacescript asigne el tipo del key
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[]<=== aqui se intenta decir en el interface del key que es un array que contendra solo strings
//     role: [number, string] <=== aqui se intenta decir que este array tendra un limite de inputs que se presentaran en los interfaces especificados
// } = { 
const person = {
    name:  "Luis",
    age: 31,
    hobbies: ["sports", "cooking"],
    role: [1, "author"]
};

//TRUPLE
// person.role.push("admin")<=== a pesar de tener una cantidad fijada en nuestro objeto el incluir algo al array no nos mostrara error por ser una excepcion de typescript, mas si se hace lo siguiente
// person.role[1] = 10 typescript nos señalara que la operacion a ejecutar ingresara un valor que no corresponde al array que queremos alter.
// person.role = [0, "admin", "user"] <=== iguallmente nos lanzara error a la hora de cambiar el objeto porque typescript tiene definidos en los interfaces del objeto cuantas variables debe aceptar y tambien los interfaces de estas.

let favoriteActivities: string[];
//Aqui se puede usar el interface any[] pero se pierde el proposito de typescript en este contexto, por ende seria lo mismo que no especificar interface
favoriteActivities = ["sports"]

console.log(person.name)

for (const hobbie of person.hobbies){
    console.log(hobbie.toUpperCase()) 
    //TS no salta error en esta instancia porque como el interface del key esta especificado el sabe el tipo de data que provendra a la hora de aplicar el metodo .toUpperCase()

    //console.log(hobbie.map())  
    //Mas si intentamos algo como un metodo map() como esta arriba en este contexto, typescript nos señalaria el error porque no es algo posible dentro de el interface "string" de hobbies
}

//ENUMS
enum Role { ADMIN, READ_ONLY, AUTHOR};
// Enums son un interface de typescript y otros lenguajes que funcionan como identificadores a los cuales se les asigna un valor comenzando de 0, de desear especificar en que numero comenzara la secuencia es posible proporcionandole ese valor al primer elemento del objeto
//ex. enum Role { ADMIN = 5, READ_ONLY, AUTHOR }
//Tampoco estamos restringidos a numeros, podemos asignar otros valores como strings 
//ex. enum Role { ADMIN = 'ADMIN', READ_ONLY, AUTHOR }

const person2 = {
    name:  "Luis2",
    age: 31,
    hobbies: ["sports", "cooking"],
    role: Role.ADMIN
};

if (person2.role === Role.ADMIN) {
    console.log("is read only")
}

