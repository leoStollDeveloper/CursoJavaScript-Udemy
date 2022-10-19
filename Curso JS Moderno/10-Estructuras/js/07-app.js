//Operador OR ||  revisa que se cumpla una condicion o la otra

const efectivo = 500;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
    console.log('Si se podes pagar')
} else {
    console.log('Fondo Insuficientes');
    }