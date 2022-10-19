const verduleria = [
    {nombre: 'manzana', precio: 200},
    {nombre: 'palta', precio: 300},
    {nombre: 'lechuga', precio: 100},
    {nombre: 'tomate', precio: 250},
    {nombre: 'zapallito', precio: 200},
    {nombre: 'pomelo', precio: 150}, 
]


// Metodo mas utilizado .forEach es un funcion


const arreglo = verduleria.map( function(prod){
    return `${prod.nombre} - precio: ${prod.precio}`;

})
const arreglo1 = verduleria.forEach( function(prod){
    return `${prod.nombre} - precio: ${prod.precio}`;
})

console.log(arreglo);
console.log(arreglo1);