

iniciarApp();

function iniciarApp() {
    console.log('Iniciando app...');

    funcionDos();
}


function funcionDos() {
    console.log('Desde la segunda funcion');

    usuarioAutentico('Leo');
}

function usuarioAutentico(usuario) {
    console.log('Autentificando usuario... espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);


}