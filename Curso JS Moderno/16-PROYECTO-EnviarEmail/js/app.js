document.addEventListener('DOMContentLoaded', function(){

    const email = {
        email: '',
        asunto:'',
        mensaje:''
    }

    

    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]')
    const btnReset = document.querySelector('#formulario button[type="reset"]')


    //Asignar eventos
    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    btnReset.addEventListener('click', function(evento){
        evento.preventDefault();

        //Reiniciar el Objeto
        email.email = '';
        email.asunto = '';
        email.mensaje = '';

        formulario.reset();
        comprobarEmail();

    })
        


    function validar(evento) {
        
        if (evento.target.value.trim() === '') {
            mostrarAlerta(`El Campo ${evento.target.id} es obligatorio`, evento.target.parentElement);
            email[evento.target.name] = '';
            comprobarEmail();
            return;
        }

        if(evento.target.id === 'email' && !validarEmail(evento.target.value)) {
            mostrarAlerta('El email no es valido', evento.target.parentElement);
            email[evento.target.name] = '';
            comprobarEmail();
            return;
        }


        limpiarAlerta(evento.target.parentElement);

        //Asignar los valores
        email[evento.target.name] = evento.target.value.trim().toLowerCase();

        // Comprobar el objeto de email
        comprobarEmail();

        
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

    function comprobarEmail() {
        console.log(email);
        if(Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return
        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;

    }


});