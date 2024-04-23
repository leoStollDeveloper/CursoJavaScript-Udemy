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

// . push agrega al final de un arreglo.

carrito.push(producto);
carrito.push(preducto2);

const producto3 = {
    nombre: "Mouse Razer",
    precio: 100
}


// .unshift agrega al inicio del arreglo.

carrito.unshift(producto3);

console.table(carrito);