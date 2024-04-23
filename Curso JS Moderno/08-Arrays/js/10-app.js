const carrito = [
    {nombre: 'funkito A', precio: 55},
    {nombre: 'funkito B', precio: 18},
    {nombre: 'funkito C', precio: 14},
    {nombre: 'funkito D', precio: 20},
    {nombre: 'funkito E', precio: 25},
    {nombre: 'funkito F', precio: 16},
]

const nuevoArreglo = carrito.map( function(producto) {
    return`${producto.nombre} - Precio: ${producto.precio }` ;
}  )

const nuevoArreglo2 = carrito.forEach( function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio }` ;
}   )


console.log(nuevoArreglo);
console.log(nuevoArreglo2);