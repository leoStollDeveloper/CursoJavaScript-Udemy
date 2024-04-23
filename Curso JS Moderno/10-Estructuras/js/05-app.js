// Switch case

const metodoDePago = 'efectivo';

switch(metodoDePago){
    case 'efectivo':
        Pagar();
    case 'cheque':
        console.log(`Pagaste con ${metodoDePago}`);
        break;
    case 'tarjeta':
        console.log( `Pagaste con ${metodoDePago}`);
        break;
    default:
        console.log('Aun no has seleccionado un metodo de pago o metodo de pago no soportado');
        break;            
}

function Pagar() {
    console.log('Pagando...');
}