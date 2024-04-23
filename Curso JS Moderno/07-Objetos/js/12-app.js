//Objeto Literal

const producto = {
    corazon: "nobleza",
    precio: 300,
    real: true
    }

// Objeto Constructor

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Lata de CocaCola', 5);
console.log(producto2);

const producto3 = new Producto('rtx4070', 450);
console.log(producto3);

const graficas = new Producto('3070ti', 350);
console.log(graficas);