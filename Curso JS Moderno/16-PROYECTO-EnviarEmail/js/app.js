document.addEventListener('DOMContentLoaded', function(){

    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    


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
        //Generar alerta en HTML
    const error = document.createElement('P');
    error.textContent = 'Hubo un error...';
    error.classList.add('bg-red-600', 'text-white','text-center');
    
    //inyectar el error al formulario
    formulario.appendChild(error)

    }




});