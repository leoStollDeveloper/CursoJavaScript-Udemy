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

const { nombre, informacion, informacion: {fabricacion, fabricacion: {pais}}} = producto;

console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);