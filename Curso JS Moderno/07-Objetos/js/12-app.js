//Objeto Literal

const leo = {
    hobby: "viciar",
    porongudo: true,
    largo: 20,
    tiempo: "horas x dia",

   

}

//Objeto Contructor


function Producto(hobby, largo) {
    this.hobby = hobby;
    this.largo = largo;
    this.porongudo = true;



}

const leo1 = new Producto('chupino', 55);
console.log(leo1);

const leo2 = new Producto('amatista');
console.log(leo2);