const producto ={
    detalles: {
        nombre:"Acer Nitro",
        precio:300,
        categoria:"laptop"
    },

    inventario: {
        stock: 20,
        proceedor:"Acer",
        ubicacion: "china"
    },

    Historia:{
        fechaIngreso: "3 agosto",
        ultimaVenta: "4 julio",
        ventasTotales: 25
    },
}

console.log(producto);

// mostrar solo detalles
console.log(producto['detalles']);

// aumento de stock a 50
producto.inventario.stock = 50;
console.log(producto['inventario']);

// cambio de categoria
producto.detalles.categotia = "Electronica"
console.log(producto['detalles']);

//nombre y precio en variables separadas
const{nombre,precio} = producto.detalles
console.log(nombre);
console.log(precio);

//producto actualizado
console.log(producto);
