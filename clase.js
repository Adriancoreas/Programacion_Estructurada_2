//const nombre = "Eli";
//const edad =30;
//const altura = 1.50;

// cuando se tiene queusar un objeto en proramacion?, R// cuando tenemos varia propiedades asia una sola entidad,  
// El objeto son las propiedades de algo que estemos creando ya sean animeles, electrodomesticos, etc.

//Creacion de un objeto con object literal
const persona={   // <- sintaxis del objeto 
    nombre: "Eli",
    edad:30,
    altura: 1.50,
}

//imprimir el objeto
console.log(persona);

//Acceder a las propiedades del objeto
//Acceder por punto 
console.log(persona.nombre)

//Acceder por corchetes
console.log(persona['edad'])

//Agregamos mas prpiedades del objeto
persona.imagen = "imagen.jpg";

console.log(persona);

//Eliminandopropiedad del objeto
//delete persona.altura;
//console.log(persona);

//Modificamos el valor de una propiedad o llave
persona.nombre = "Adrián";
console.log(persona);

//Asignar valor de la propiedad del objeto a una variable 
const nom = persona.nombre
console.log(nom);

//Destructuring
//const {nombre} = persona;
//.log(nombre);

//const {edad} = persona;
//console.log(edad)

const {altura} = persona;
console.log(altura)

const {nombre, edad} = persona;
console.log(nombre);
console.log(edad)

// Ejercicio 1
// Declara un objeto animal, con las propiedades raza, tamaño y color muestra el objeto en consola y luego imprime cada propiedad por separado. 

const animal = {
    raza: "perro salchica",
    tamaño:"mediano",
    color: "blanco"
}

console.log(animal)


const {raza, tamaño, color} = animal
console.log(raza);
console.log(tamaño);
console.log(color);

//Ejercicio 2
//Al objeto animal agrega una nueva propiedad (la que desees) imprímela en consola y luego elimina la propiedad raza.

animal.edad = "2 años";


delete animal.raza;
console.log(animal)

// Ejercicio 3
//Crea un objeto usuario con las propiedades usuario, email y rol, usa destructuring para crear variables con esas propiedades y mostrarlas en consola. 

const empleado = {
    usuario: "adrian",
    email:"12345@gmail.com",
    rol:"empleado"
}

console.log(empleado)

const {usuario, email, rol} = empleado
console.log(usuario);
console.log(email);
console.log(rol);