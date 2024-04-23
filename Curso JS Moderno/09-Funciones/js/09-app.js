




const reproducto = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el id ${id}`);
    },

    pausar: function(){
        console.log('pausando...')
    },
    borrar: function(id) {
        console.log(`Borrando cancion... ${id}`)
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando playlist de ${nombre}`)
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist ${nombre}`)
    }


}


reproducto.reproducir(30)
reproducto.reproducir(20)
reproducto.pausar();
reproducto.borrar(30)
reproducto.crearPlaylist('Rock');
reproducto.crearPlaylist('Romantico');
reproducto.crearPlaylist('Lofi');
reproducto.reproducirPlaylist('Heavy Metal');