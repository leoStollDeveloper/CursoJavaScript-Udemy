//Eliminar elementos del DOM

// const primerEnlace = document.querySelector('a');

// primerEnlace.remove();

//Eliminar desde padre...

const navegacion = document.querySelector('.navegacion');

console.log(navegacion.children);

navegacion.removeChild(navegacion.children[2]);