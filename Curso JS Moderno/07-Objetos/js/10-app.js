const leo = {
    hobby: "viciar",
    porongudo: true,
    largo: 20,

}

const medidas = {
    peso: '14',
    medida: '1m'

}    

//console.log(leo)
//console.log(medidas)

const resultado = Object.assign(leo, medidas);

//console.log(resultado);


//Sprend Operator o Rest Operator

const resultado2 = {...leo, ...medidas}

console.log(resultado2);

