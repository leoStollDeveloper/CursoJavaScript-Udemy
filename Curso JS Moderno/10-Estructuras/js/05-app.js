// Swicht para evaluar multiples Condiciones

const metodoPago = 'tarjeta';

switch(metodoPago) {
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;

    case 'Cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;

        case 'tarjeta':
            pagar();
        break;

    default:
        console.log('Aun no has seccionado un metodo de pago o metodo de pago');
        break;
    }

    function pagar() {
        console.log('Pagado...');
    }