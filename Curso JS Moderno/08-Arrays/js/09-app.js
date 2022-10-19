const verduleria = [
    {nombre: 'manzana', precio: 200},
    {nombre: 'palta', precio: 300},
    {nombre: 'lechuga', precio: 100},
    {nombre: 'tomate', precio: 250},
    {nombre: 'zapallito', precio: 200},
    {nombre: 'pomelo', precio: 150}, 
]



for(let i = 0; i < verduleria.length; i++) {
    console.log( `${verduleria[i].nombre} - precio: ${verduleria[i].precio}`);

}


// Metodo mas utilizado .forEach es un funcion


verduleria.forEach( function(prod) {
    console.log( `${prod.nombre} - precio: ${prod.precio}`);

})
