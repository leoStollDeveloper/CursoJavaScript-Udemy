//Forma declarativa, (relacionada con Programacion Funciona}
const carrito = [];

//Definir un producto (objeto)

const producto = {
    nombre: "joystic ps5",
    precio: 150

}

const producto2 = {
    nombre: "anteojos",
    precio: 100
}

const producto3 = {
    nombre: "mouse",
    precio: 50

}

let resultado;

resultado = [...carrito, producto2, producto];

resultado = [producto3, ...resultado];



console.table(resultado);