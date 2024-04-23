const producto1 = {
    corazon: "nobleza",
    precio: 300,
    real: true,
    monstrarInfo: function() {
        console.log(`EL Producto: ${this.corazon} tiene un precio de ${this.precio}`)
    }
}





const producto2 = {
    corazon: "mojon",
    precio: 1,
    real: true,
    monstrarInfo: function() {
        console.log(`EL Producto: ${this.corazon} tiene un precio de ${this.precio}`)
    }
}

producto1.monstrarInfo();
producto2.monstrarInfo();
