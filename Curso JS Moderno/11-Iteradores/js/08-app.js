
const automovil = {
    modelo: 'Chevrolet',
    año: 1972,
    motor: '250'
}

// for(let propiedad in automovil){
//     console.log(`${automovil[propiedad]}`)
// }


for(let [llave, valor] of Object.entries(automovil)) {
    console.log(valor);
    console.log(llave);
}