document.addEventListener('DOMContentLoaded', function(){

    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    


    //Asignar eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);
        
  
 
    function validar(evento) {
        if (evento.target.value.trim() === '') {
            mostrarAlerta();
        }else {
            console.log('si hay algo...');
        }
    } 

    function mostrarAlerta(){
    const error = document.createElement('P');
    error.textContent = 'Hubo un error...';
    
    console.log(error);

    }




});