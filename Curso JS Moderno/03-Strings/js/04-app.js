const producto = '            Monitor 20 pulgadas ';

console.log(producto);
console.log(producto.length);


//metodo para eliminar del inicio los espacios
console.log( producto.trimStart() );


//metodo para eliminar del inicio los espacios
console.log( producto.trimEnd() );


//metodo para eliminar espacios en el inicio y al final (metodo nuevo)
console.log( producto.trimStart().trimEnd());

//metodo para eliminar los espacios de ambos lados (metodo antiguo)
console.log( producto.trim());


