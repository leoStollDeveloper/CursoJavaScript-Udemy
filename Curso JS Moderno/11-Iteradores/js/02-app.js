// preguntas para obtener un trabajo
//
//for ( let i = 0; i <= 10; i++ ) {
//    if(i ===5) {
//        console.log('CINCO');
//      
//    }
//
//        console.log(`Numero: ${i}`)
//}

// break sirve para detener la ejecucion del for loop
// continue sirve continuar la ejecucion del for loop

const verduleria = [
    {nombre: 'manzana', precio: 200},
    {nombre: 'palta', precio: 300},
    {nombre: 'lechuga', precio: 100},
    {nombre: 'tomate', precio: 250, descuento:true},
    {nombre: 'zapallito', precio: 200},
    {nombre: 'pomelo', precio: 150}, 
]

for(let i = 0; i < verduleria.length; i++) {
    if(verduleria[i].descuento) {
        console.log(`El articulo ${verduleria[i].nombre} -Tiene descuento-`);
        continue;
    }
    console.log(verduleria[i].nombre)
}


