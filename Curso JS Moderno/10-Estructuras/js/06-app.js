//operador && // && sirve para que se cumplan varias funciones

const usuario = false; 
const puedePagar = false;

if(usuario && puedePagar) {
    console.log('Si puedes comprar')

}   else if(!puedePagar && !usuario) {
    console.log('No no puede comprar')

} else if(!usuario) {
    console.log('Iniciar sesion');

} else if(!puedePagar) {
    console.log('Fondos insuficientes')
    
} 

// if  exprecion  'si es esto'
// else exprecion 'si no es esto'
// else if se utiliza para 
//! exprecion "si no es "