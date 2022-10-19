const frutas = ['manzana', 'pera', 'melon', 'banana', 'mandarina', 'kiwi'];

console.table(frutas);
console.table(frutas[0]);
console.table(frutas[1]);
console.table(frutas[2]);
console.table(frutas[3]);

//cuanto mide el arreglo

console.log(frutas.length);


//integrador for(let i = 0;) {

//}

for(let i = 0; i < frutas.length; i++) {
    console.log( frutas[i] );

}