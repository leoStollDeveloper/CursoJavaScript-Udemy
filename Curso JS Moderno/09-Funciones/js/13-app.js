const reproductor = {

    cancio: '',

    reproducir: id => console.log(`Reproduciendo canciones con el id ${id}`),
    
    pausar: () => console.log('pausar...'),
    
    borrar:id => console.log(`Borrando canciones... ${id}`),
    
    playList: nombre => console.log(`Crear la playlist de ${nombre}`),
    
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`),
    

    //set sirve para agregar valores
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Agregando ${cancion}`);
    },

    //get sirve para obtener de vuelta esos valores
    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }

}

reproductor.nuevaCancion = 'Paint It, Black';
reproductor.obtenerCancion;

reproductor.reproducir(20)
reproductor.reproducir(7)
reproductor.pausar();
reproductor.borrar(7)
reproductor.playList('Rock');
reproductor.playList('Pop');
reproductor.reproducirPlaylist('Pop');
