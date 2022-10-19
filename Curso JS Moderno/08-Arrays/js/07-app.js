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
const producto4 = {
        nombre: "notebook",
        precio: 10000

}

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto3);
carrito.push(producto4);

console.table(carrito);

//Eliminar ultimo elemento de un arrays utilizando .pop 
//carrito.pop();
//console.table(carrito);


//Eliminar del inicio del arreglo de un arrays se utiliza .shift
//carrito.shift()
//console.table(carrito);

carrito.splice(0,1)
console.table(carrito);