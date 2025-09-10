const libro = {
    informacio:{
        titulo: "12345",
        autor: "Juan",
        genero:"terror"
    },

    disponibilidad: {
        copias: 30,
        prestados: 20,
        ubicacion:"Indonecia"
    },

    registro:{
        fechaPublicacion:new Date("5/10/1998"),
        fechaingreso:new Date("4/12/2005"),
        ultimarevicion:new Date("3/7/2010")
    }
}
console.log(libro);

//informacion de autor 
console.log(libro['informacio']);

// calcular disponibilidad
libro.disponibilidad.disponibles = libro.disponibilidad.copias - libro.disponibilidad.prestados
console.log(libro['disponibilidad']);

//catualizar revicion
libro.registro.ultimarevicion = new Date()
console.log(libro['registro']);

// cambio de genero
libro.informacio.genero = "suspenso"
console.log(libro['informacio']);

//
const{titulo} = libro.informacio
const{ubicacion} = libro.disponibilidad
console.log(titulo);
console.log(ubicacion);

//libro actualizado
console.log(libro);
