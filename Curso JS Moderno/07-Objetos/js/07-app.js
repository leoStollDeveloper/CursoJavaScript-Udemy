const producto = {
    corazon: "nobleza",
    precio: 300,
    real: true
}

producto.real = false;

delete producto.precio;

console.log(producto);