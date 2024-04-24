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
            mostrarAlerta(`El Campo ${evento.target.id} es obligatorio`, evento.target.parentElement);
        }else {
            console.log('si hay algo...');
        }
    } 

    function mostrarAlerta(mensaje, referencia){
        //Generar alerta en HTML
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('bg-red-600', 'text-white','text-center');
    
    //inyectar el error al formulario
    referencia.appendChild(error)

    }




});