"use strict";

const producto = {
    corazon: "nobleza",
    precio: 300,
    real: true,
}
//manera de sellar un objeto, solo puede modificar los resultados.
Object.seal( producto );

   producto.real = false;
// producto.imagen = "imagen.png";
// delete.producto.precio;

console.log(producto);
//manera de consutar si el objeto esta sellado.
console.log(Object.isSealed(producto));


