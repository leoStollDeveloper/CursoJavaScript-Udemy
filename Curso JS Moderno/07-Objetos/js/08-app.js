"use strict";



const leo = {
    hobby: "viciar",
    porongudo: true,
    largo: 20,

}

Object.freeze( leo );

//leo.porongudo = false;
//leo.imagen = "img.jpg";


console.log(leo);

console.log(Object.isFrozen(leo));
