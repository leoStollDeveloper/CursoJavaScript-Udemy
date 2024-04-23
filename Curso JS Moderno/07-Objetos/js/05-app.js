const producto = {
    corazon: "nobleza",
    precio: 300,
    real: true,
    informacion : {
        medidas : {
        peso: '1kg',
        medida: '1m'
        },
        fabricacion: {
            pais: 'Italia'
        }
    }
}


//console.log(producto):

console.log(producto.informacion.fabricacion.pais);