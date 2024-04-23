const navegacion = document.querySelector ('.navegacion');

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
// console.log(navegacion.childNodes); // LOS ESPACIOS EN BLANCO SON CONSIDERADOS ELEMENTOS.
// console.log(navegacion.children); // childen te va a listar elementos reales.


// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);

const card = document.querySelector('.card');


// card.children[1].children[1].textContent = 'Nuevo Encabezado desde Traversing the dom'

// card.children[0].src = 'img/hacer3.jpg';
// console.log(card.children[0]);

//Traversing de Hijo al Padre

//console.log(card.parentNode);
// console.log(card.parentElement.parentElement.parentElement);

// console.log(card);
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling);


// const ultimoCard = document.querySelector('.card:nth-child(4)');
// console.log(ultimoCard.previousElementSibling);
