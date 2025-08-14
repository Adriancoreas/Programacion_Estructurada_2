//Un sisema de gestion de pedidios recibe codigos de seguimiento en el formato: PED-2025-00045, se necesita extraer el año del pedido y el numero de orden usando el metodo substring.

// 1. Extraer el año del pedido (2025)  el numero de orden (00045) usando substring().

// import readline from 'readline';

// const rl = readline.createInterface({
//     input: process.stdin,
//     output:  process.stdout
// })

// rl.question("Ingrese el codigo del pedido(ej:PED-2025-00045):", (codigo)=>
// {
//     const año = codigo.substring(4,8);
//     const numeroOrden = codigo.substring(9);

//     console.log(`Año del pedido: ${año}`);
//     console.log(`Numero de orden: ${numeroOrden}`);

//     rl.close()
// })

///////////// EJERCICIOS PARCTICOS ////////

                // Ejercicio 1 //

// import readline from 'readline';

//  const rl = readline.createInterface({
//      input: process.stdin,
//      output:  process.stdout
//  })

//  rl.question("ingrese su nombre sin espacios", (nombre)=>{
//     const nombreLimpio = nombre.trim();
//     const nombreSinEspacios = nombre.replaceAll("","");
//     const numCaract = nombreSinEspacios.length;

//     console.log(`Nombre limpio: ${nombreLimpio}`);
//     console.log(`Nombre sin espacios: ${nombreSinEspacios}`);
//     console.log(`Cantidad de caracteres sin espacios: ${numCaract}`);

//     rl.close();
// })


             // Ejercicio 2 //

// import readline from 'readline';

//  const rl = readline.createInterface({
//      input: process.stdin,
//      output:  process.stdout
//  })

//  rl.question("Ingrese su correo:", (correo)=>{
//     const correoNormalizado = correo.toLocaleLowerCase();
//     const dominValido = correo.includes("@gmail.com");

//     console.log(`Su correo normalizado es: ${correoNormalizado}`);
//     console.log(`Es dominio @gmail.com? ${dominValido}`)

//     rl.close();
//  })



             // Ejercicio 3 //

// import readline from 'readline';

//  const rl = readline.createInterface({
//      input: process.stdin,
//      output:  process.stdout
//  })

//  rl.question("Ingrese un codigo generado:", (codigo)=>{
//     const ultimosDigitos = codigo.slice(-4)
//     console.log(`Ultimos digitos: ${ultimosDigitos}`)

//     rl.close();
//  })


             // Ejercicio 4 //

import readline from 'readline';

 const rl = readline.createInterface({
     input: process.stdin,
     output:  process.stdout
 })

 rl.question("Ingrese el mensaje", (mensaje)=>{
    const error = mensaje.indexOf("error");
    console.log(`se a detectado lo siguiente en su mensaje: ${error}`)

    rl.close();
 })