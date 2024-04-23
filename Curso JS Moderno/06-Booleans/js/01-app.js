const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";


// console.log (boolean1);
// console.log (boolean2);


//el operador typeof indica que tipo de dato es.
// console.log(typeof boolean1);

console.log(boolean1 === boolean3);

// el contructor new usualmente crea objetos, no crean el valor primitivo.
const boolean4 = new Boolean(true);
console.log(typeof boolean4);