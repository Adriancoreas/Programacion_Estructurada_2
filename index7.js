const estudiante ={
    nombre: "Juan",
    apellido: "Cruz",
    edad: "27 años",
    direccion: {
        pais:"El Salvador",
        calle:"Los Almendros",
        numCasa:"27"
    }
}

//Acceso al objeto
console.log(estudiante)
console.log(estudiante.direccion)

console.log(estudiante['direccion']);

//agregamos nueva propiedad
estudiante.colorOjos = "azul";
console.log(estudiante);

//Agregamos propiedad al objeto
estudiante.direccion.postal = 503;

console.log(estudiante['direccion']);

//Modificamos propiedad
estudiante.direccion.numCasa = 20;
console.log(estudiante['direccion']);

//eliminamos propiedades del objeto animado
delete estudiante.direccion.numCasa
console.log(estudiante['direccion'])
