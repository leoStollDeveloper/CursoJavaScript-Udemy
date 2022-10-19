// Operador mayor que y menor que
const dinero = 200;
const totalAPagar = 500;
const tarjeta = false;
const cheque = true;


if(dinero >= totalAPagar) {    
    console.log('Si podemos pagar');

} else if(cheque) {
    console.log('Si tengo un cheque');

} else if(tarjeta) {
    console.log('Si puedo pagar con tarjeta');

} else{   // else siempre se va a ejecutar cuando 
          // ninguna de las condiciones previas se cumpla.
    console.log('Fondo insuficiente');
}
