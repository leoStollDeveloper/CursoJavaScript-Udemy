const leo = {
    hobby: "correr",
    equilibrio: true,
    largo: 20,

};

//const hooby = leo.hobby;
//console.log(hooby);


//Destructuring...

const {hobby, equilibrio, largo } = leo;


console.log(hobby);
//console.log(equilibrio);
//console.log(largo);




//Destructuring con Arreglos

//const numero = [5,4,3,2,1];

//const [ primero, , , cuarto ] = numero;

//console.log(cuarto);
//console.log(primero);


//Destructuring muy utilizada a la hora de usar react

const numero = [50,40,30,20,10];

const [ primero, ...segundo ] = numero;

console.log(segundo);
