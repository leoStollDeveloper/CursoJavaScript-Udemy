//querySelectorAll va retornar todos los elementos que cumplan la condicion del selector.


const card = document.querySelectorAll('.card');
console.log(card);

const formulario = document.querySelectorAll('#formulario');
console.log(formulario);


//Si un elemento no existe

const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste);