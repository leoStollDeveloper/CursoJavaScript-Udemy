
// for (let i = 0; i <= 10; i ++){

//     if(i=== 5 ) {
//         console.log('CINCO');
//         continue;
//     }
//     console.log(`Numero: ${i}`)
// }







const carrito = [
    {nombre: 'funkito 135', precio: 55},
    {nombre: 'funkito 274', precio: 18},
    {nombre: 'funkito 306', precio: 14, descuento: true},
    {nombre: 'funkito 487', precio: 20},
    {nombre: 'funkito 642', precio: 25},
    {nombre: 'funkito 573', precio: 16},
]

for (let i = 0; i < carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} Tiene descuento!`);
        continue;
    }
    
    console.log(carrito[i].nombre);

    }
