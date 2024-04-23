const nav = document.querySelector('.navegacion');

// registrar un evento
nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegacion');

    nav.style.backgroundColor = 'transparent';

})

nav.addEventListener('dbclick', () => {
    console.log('Entrando en la navegacion');

    nav.style.backgroundColor = 'white';

})

// mousedown - similar al click
//click
//dbclick = doble click
// mouseup - cuando sueltas el mouse