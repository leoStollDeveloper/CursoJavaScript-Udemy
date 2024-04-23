//Operador &&

const usuario =true;
const puedePagar = true;

if(usuario && puedePagar){
    console.log('Si puedes comprar')
} else if (!puedePagar && !usuario){
    console.log('No no puede comprar')
} else if (!usuario) {
    console.log('Inicia sesion o crea una cuenta');
} else if (!puedePagar){
    console.log('Fondo Insuficientes')
}