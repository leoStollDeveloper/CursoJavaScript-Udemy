const reproducto = {
    reproducir: id =>console.log(`Reproduciendo cancion con el id ${id}`),
    pausar: () =>console.log('pausando...'),
    borrar: (id) =>console.log(`Borrando cancion... ${id}`),
    crearPlaylist:(nombre) =>console.log(`Creando playlist de ${nombre}`),
    reproducirPlaylist: (nombre)=>console.log(`Reproduciendo la playlist ${nombre}`),

    set nuevacancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
},

    get obtenerCancion() {
        console.log (`${this.cancion}`)
    }

}

reproducto.nuevacancion = 'Maluma baby';
reproducto.obtenerCancion;

reproducto.reproducir(30)
reproducto.reproducir(20)
reproducto.pausar();
reproducto.borrar(30)
reproducto.crearPlaylist('Rock');
reproducto.crearPlaylist('Romantico');
reproducto.crearPlaylist('Lofi');
reproducto.reproducirPlaylist('Heavy Metal');