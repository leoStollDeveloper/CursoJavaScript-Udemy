"use strict";

const producto = {
    corazon: "nobleza",
    precio: 300,
    real: true,
}
//Manera de frerzar un objeto.
Object.freeze( producto );

// producto.real = false;
// producto.imagen = "imagen.png";
// delete.producto.precio;

console.log(producto);

//Manera de preguntar si es objeto esta freezado.
console.log(Object.isFrozen(producto));
