const producto = 'Monitor 20 pulgadas';

// .repetear te va a permitir repetir una cadena de texto.

const texto = 'en Promocion'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

// Split, dividir un string

const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));
const hobbies = 'Leer, caminar, saltar, correr, musica,';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JavaScript #LeoStollDev ";
console.log(tweet.split('#'));