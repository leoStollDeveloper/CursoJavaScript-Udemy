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
            return;
        }

        if(evento.target.id === 'email' && !validarEmail(evento.target.value)) {
            mostrarAlerta('El email no es valido', evento.target.parentElement);
            return;
        }


        limpiarAlerta(evento.target.parentElement);
        
    } 

    function mostrarAlerta(mensaje, referencia){
    limpiarAlerta(referencia);
    



        //Generar alerta en HTML
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('bg-red-600', 'text-white','text-center');
    
    //inyectar el error al formulario
    referencia.appendChild(error);

    }

    function limpiarAlerta(referencia) {
         //Comprueva si ya existe un alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta) {
            alerta.remove();
        }
    }
    

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 

        const resultado = regex.test(email);
        return resultado;




    }




});