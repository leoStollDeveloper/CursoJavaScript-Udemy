//Arrow Functions ventajas

const aprendiendo = function(tecnologia, tecnologia2) {
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}
aprendiendo('JavaScript', 'Node.js')

//cuando es solo una parametros no hace falta utilizar parentecis, ejemplo:

//const aprendiendo2 = tecnologia  => `Aprendiendo ${tecnologia}`;
//console.log(aprendiendo2('Node.js'));

//cuando hay mas de dos parametros se agrega los parenticis 
const aprendiendo2 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;
console.log(aprendiendo2('JavaScript', 'Node.js'));
