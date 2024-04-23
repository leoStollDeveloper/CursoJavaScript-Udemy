
// for (let i = 0; i <= 10; i ++){
//     console.log(`Numero: ${i}`)
// }

// for(let i = 1; i <= 20; i++){
//     if(i % 2 === 0 ){
//         console.log(`El numero ${i} es PAR`);
//     }else{
//         console.log(`El numero ${i} es IMPAR`);
//     }

// }


















const carrito = [
    {nombre: 'funkito A', precio: 55},
    {nombre: 'funkito B', precio: 18},
    {nombre: 'funkito C', precio: 14},
    {nombre: 'funkito D', precio: 20},
    {nombre: 'funkito E', precio: 25},
    {nombre: 'funkito F', precio: 16},
]
console.log (carrito.length);

for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}