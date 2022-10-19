function sumar(a, b) {
    return a + b;

}

const resultado = sumar(2, 3);

console.log(resultado);


//Ejemplo mas avansado 


let total = 0 
function agregarCarrito(precio){
    return total += precio;

}

function agregarImpuesto(total){
    return total * 21;

}

total =agregarCarrito(150);
total =agregarCarrito(250);
total =agregarCarrito(14);

const totalPagar = agregarImpuesto(total);

console.log(`El total a pagar es de ${totalPagar}`);


console.log(total);

