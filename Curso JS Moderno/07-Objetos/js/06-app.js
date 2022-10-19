const leo = {
    hobby: "correr",
    porongudo: true,
    largo: 20,
    informatio: {
        medidas: {
        altura: "1.85",
        peso: "75kg"
    },
    nacionalidad:{
        pais: "Portugues"

    }
  }
}

const {hobby, informatio, informatio: {nacionalidad, nacionalidad: {pais}}} = leo;

console.log(leo);
console.log(informatio);
console.log(nacionalidad);
console.log(pais);
