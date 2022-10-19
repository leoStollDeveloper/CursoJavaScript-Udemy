"use strict";



const leo = {
    hobby: "viciar",
    porongudo: true,
    largo: 20,

}

Object.seal( leo );

leo.porongudo = false;
//leo.imagen = "img.jpg";
//delete producto.precio;


console.log(leo);

console.log(Object.isSealed (leo));


