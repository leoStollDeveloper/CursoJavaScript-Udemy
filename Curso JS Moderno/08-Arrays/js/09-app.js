const carrito = [
    {nombre: 'funkito A', precio: 55},
    {nombre: 'funkito B', precio: 18},
    {nombre: 'funkito C', precio: 14},
    {nombre: 'funkito D', precio: 20},
    {nombre: 'funkito E', precio: 25},
    {nombre: 'funkito F', precio: 16},
]




for(let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio }` );
}

//Ejemplo de array Methods

carrito.forEach(function(producto) {
    console.log(`${producto[i].nombre} - Precio: ${producto[i].precio }` );
} )