// for of

const pendientes = ['Tipear','Estudiar','Programar','Vivir'];


const verduleria = [
    {nombre: 'manzana', precio: 200},
    {nombre: 'palta', precio: 300},
    {nombre: 'lechuga', precio: 100},
    {nombre: 'tomate', precio: 250},
    {nombre: 'zapallito', precio: 200},
    {nombre: 'pomelo', precio: 150}, 
]

for(let pendiente of pendientes) {
    console.log(pendiente);

}

for(let producto of verduleria) {
    console.log(producto.nombre)
}