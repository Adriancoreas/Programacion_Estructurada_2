const perfilUsuario = {
    infoPersonal:{
        nombre:"Luis",
        edad:"21",
        email:"luisito123@gmail.com"
    },

    preferenciasApp:{
        idioma: "español",
        fecha:new Date(),
        tema: "claro"
    },

    estadisticas:{
        fechaRegistro: new Date("11/08/2024"),
        ultimoAcceso: new Date("2/12/2024"),
        numSeciones: 50
    }
}

console.log(perfilUsuario)

//seciones por separado
console.log(perfilUsuario['infoPersonal']);
console.log(perfilUsuario['preferenciasApp']);
console.log(perfilUsuario['estadisticas']);

// cambiando idioma
perfilUsuario.preferenciasApp.idioma = "ingles"
console.log(perfilUsuario['preferenciasApp']);

// actualizando fecha
perfilUsuario.estadisticas.ultimoAcceso = new Date();
console.log(perfilUsuario['estadisticas']);

// eliminamos una preferencia
delete perfilUsuario.preferenciasApp.tema
console.log(perfilUsuario['preferenciasApp']);

// email y idioma por separado
const{email} = perfilUsuario.infoPersonal
const{idioma} = perfilUsuario.preferenciasApp
console.log(email);
console.log(idioma);

// perfil actualizado
console.log(perfilUsuario);