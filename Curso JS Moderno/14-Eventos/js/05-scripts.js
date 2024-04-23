window.addEventListener('scroll', () => {
    
    
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    if(ubicacion.to < 785 ) {
        console.log('El elemento ya esta visible');

    }else {
        console.log('aaun no, da mas scroll');
    }


})