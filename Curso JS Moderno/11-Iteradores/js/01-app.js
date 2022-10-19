//for ( let i = 0; i <= 10; i++ ) {
//    console.log(`Numero: ${i}`)
//}

//for(let i = 1; i <= 20; i++) {
//    if(i % 2 === 0) {
//    console.log(`El numero ${i} es PAR`);
//} else {
//    console.log(`El numero ${i} es IMPAR`);
//}
//}

const verduleria = [
    {nombre: 'manzana', precio: 200},
    {nombre: 'palta', precio: 300},
    {nombre: 'lechuga', precio: 100},
    {nombre: 'tomate', precio: 250},
    {nombre: 'zapallito', precio: 200},
    {nombre: 'pomelo', precio: 150}, 
]

// .length indica cuantos elementos hay en la variable.
console.log(verduleria.length);

for(let i = 0; i < verduleria.length; i++) {
    console.log(verduleria[i].nombre);
}
