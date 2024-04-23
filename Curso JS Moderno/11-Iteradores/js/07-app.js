
 const pendientes = ['Eat', 'sleep', 'code', 'repeat'];
 


const carrito = [
    {nombre:'Monitor linox 144Hz', precio: 230},
    {nombre:'4080 geforce', precio: 430},
    {nombre:'memoria DD5 32GB', precio: 120},
    {nombre:'Fuente Zeasonic G-780', precio: 200},
    {nombre:'Placa base msi B550', precio: 180},
    {nombre:'Intel pentium 4', precio: 20},
]

 for(let pendiente of pendientes){
     console.log(pendiente);

}

for( let producto of carrito) {
    console.log(producto.nombre)
}