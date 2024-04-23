const producto = {
    nombre: "monitor MSI",
    precio: 75,
    disponible: true
}

//const nombre = producto.nombre;
//console.log(nombre);


//Destructuring
const {nombre,} = producto;

console.log(nombre);


//Destructuring con Arreglos

const numeros = [10,20,30,40,50];

const [primero, ...tercero] = numeros;

console.log(tercero);