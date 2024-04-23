// forEach

const pendientes = ['Eat', 'sleep', 'code', 'repeat'];
 
pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`)
})

const carrito = [
    {nombre:'Monitor linox 144Hz', precio: 230},
    {nombre:'4080 geforce', precio: 430},
    {nombre:'memoria DD5 32GB', precio: 120},
    {nombre:'Fuente Zeasonic G-780', precio: 200},
    {nombre:'Placa base msi B550', precio: 180},
    {nombre:'Intel pentium 4', precio: 20},
]

const nuevoArreglo = carrito.forEach( producto => producto.nombre);


const nuevoArreglo2 = carrito.map( producto => producto.nombre);


console.log(nuevoArreglo);
console.log(nuevoArreglo2);

