const producto = {
    corazon: "nobleza",
    precio: 300,
    real: true,
}

const medidas = {
    peso: '1kg',
    medidas: '1m',
}



console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);

//Spread Operator o Rest Operator
//es la forma mas utilizada para unir objetos.
const resultado2 = { ...producto, ...medidas};

console.log(resultado);
console.log(resultado2);
