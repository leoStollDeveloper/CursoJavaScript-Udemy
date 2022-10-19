//Buenas practicas

const autenticado = true

if(autenticado) {
    console.log('El usuario esta autenticado')
}

//Mala practica

const autenticado2 = true

if(autenticado2 === true ) {
    console.log('Usuario es autentico')
}

//no es necesario evaluar si es true en este caso.


const puntaje = 1500;

function revisarPuntaje() {
    if(puntaje > 1100) {
        console.log('Exelente!!')
        return;    
    } 
    
    if (puntaje > 1500) {
        console.log('Buen puntaje... felicidades')
        return;
    }
  
}
revisarPuntaje();


