//forEach

const pendientes = ['Tipear','Estudiar','Programar','Vivir'];

pendientes.forEach(  (pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`)
})

const verduleria = [
    {nombre: 'manzana', precio: 200},
    {nombre: 'palta', precio: 300},
    {nombre: 'lechuga', precio: 100},
    {nombre: 'tomate', precio: 250},
    {nombre: 'zapallito', precio: 200},
    {nombre: 'pomelo', precio: 150}, 
]

const nuevoArreglo1 = verduleria.forEach( productos => productos.nombre);
const nuevoArreglo2 = verduleria.map( productos => productos.nombre);

console.log(nuevoArreglo1);
console.log(nuevoArreglo2);