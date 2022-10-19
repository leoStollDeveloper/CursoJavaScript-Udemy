const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canciones con el id ${id}`);
    },
    pausar: function() {
        console.log('pausar...')
    },
    borrar: function(id) {
        console.log(`Borrando canciones... ${id}`)
    },
    playList: function(nombre) {
        console.log(`Crear la playlist de ${nombre}`)
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist ${nombre}`)
    }
}

reproductor.reproducir(20)
reproductor.reproducir(7)
reproductor.pausar();
reproductor.borrar(7)
reproductor.playList('Rock');
reproductor.playList('Pop');
reproductor.reproducirPlaylist('Pop');


