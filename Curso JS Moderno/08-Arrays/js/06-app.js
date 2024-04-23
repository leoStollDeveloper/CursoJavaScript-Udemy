const carrito = [];

// Definir un producto

const producto = {
    nombre: "Monitor Samsung 144ghz",
    precio: 200
}

const producto2 = {
    nombre: "teclado Mecanico Red Dragon",
    precio: 60
}

const producto3 = {
    nombre: "Mouse Razer",
    precio: 100
}

let resultado;

resultado = [...carrito, producto];


resultado = [...resultado, producto2]
resultado = [producto3, ...resultado];




console.table(resultado);