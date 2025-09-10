const estudiante = {
    datospersonales: {
    nombre: "Roberto",
    edad: 20,
    email:"beto123@gmail.com"
    },

    Cursos:[
        {
        nombreDelCurso: "programacion",
        calificacion: 10,
        estado: "aprobado"
        },
        {
        nombreDelCurso: "sistemas",
        calificacion: 9,
        estado: "aprobado"  
        }
    ],


    configiracion:{
        idioma: "español",
        notiicaciones: "activadas",
        ultimoAcceso:"17/01/2024"
    }
}

console.log(estudiante)

////////// 1 /////////
const{nombre} = estudiante.datospersonales
const{email} = estudiante.datospersonales
console.log(nombre)
console.log(email)

//////// 2 //////////



//////// 3 //////////
estudiante.configiracion.idioma = "ingles"

console.log(estudiante['configiracion'])

///////// 4 //////////
estudiante.configiracion.ultimoAcceso = new Date()
console.log(estudiante['configiracion'])

/////////// 5 ////////
const{edad} = estudiante.datospersonales
const{notiicaciones} = estudiante.configiracion
console.log(edad)
console.log(notiicaciones)

/////////// 6 /////////
console.log(estudiante)
