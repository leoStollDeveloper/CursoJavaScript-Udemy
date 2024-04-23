const producto = 'Monitor 20 pulgadas ';
const precio = '80 Euros ';

//Distintas sintaxis de concatenar variables

//console.log(producto.concat(precio));
//console.log(producto.concat('En descuento'));

//Otros metodos de sintaxis
console.log( producto + "Con un precio de: " + precio  );

console.log("El producto " + producto + "tiene un precio de " + precio);


//Se recomienda utilizar la sintaxis ECMAScript 6 
console.log(`El Producto ${producto} tiene un precio de $ ${precio}`);