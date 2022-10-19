const verduleria = [
    {nombre: 'manzana', precio: 200},
    {nombre: 'palta', precio: 300},
    {nombre: 'lechuga', precio: 100},
    {nombre: 'tomate', precio: 250},
    {nombre: 'zapallito', precio: 200},
    {nombre: 'pomelo', precio: 150}, 
]


// Metodo mas utilizado .forEach es un funcion



const arreglo = verduleria.map( prod  => `${prod.nombre} - precio: ${prod.precio}`)


verduleria.forEach( prod =>( `${prod.nombre} - precio: ${prod.precio}`));


console.log(arreglo);
