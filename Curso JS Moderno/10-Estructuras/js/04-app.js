

const dinero = 100;
const totalAPagar = 500;
const tarjeta = false;
const cheque = false;


if( dinero >= totalAPagar) {
    console.log('Si podemos pagar');
} else if (cheque) {
    console.log('Si tengo un cheque');
} else if (tarjeta){
    console.log('Si puedo pagar con la tarjeta');
}else {
    console.log('Fondo Insuficiente');
}