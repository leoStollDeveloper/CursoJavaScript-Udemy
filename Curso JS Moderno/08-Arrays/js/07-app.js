const carrito = [];

// Definir un producto

const producto = {
    nombre: "Monitor Samsung 144ghz",
    precio: 200
}

const preducto2 = {
    nombre: "teclado Mecanico Red Dragon",
    precio: 60
}

const preducto4 = {
    nombre: "Cascos Corsair",
    precio: 80
}

// . push agrega al final de un arreglo.

carrito.push(producto);
carrito.push(preducto2);
carrito.push(preducto4);

const producto3 = {
    nombre: "Mouse Razer",
    precio: 100
}


// .unshift agrega al inicio del arreglo.

carrito.unshift(producto3);
console.table(carrito);

// //Elimina ultimo elemento de un arreglo

// carrito.pop();
// console.table(carrito);

// // Eliminar del inicio del arreglo
// carrito.shift();
// console.table(carrito);

carrito.splice(1, 1);
console.table(carrito);


