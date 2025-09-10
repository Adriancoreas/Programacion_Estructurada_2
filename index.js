const auto = {
    marca: "toyota",
    modelo: "sedan",
    año: 2018
}
console.log(auto)

// podiedades por separado
const {marca,modelo,año} = auto;
console.log(marca);
console.log(modelo);
console.log(año);

//////// 2///// 
// agregando nueva popiedad
auto.color = "blanco";
console.log(auto);

// eliminando propiedad
delete auto.año 
console.log(auto);

