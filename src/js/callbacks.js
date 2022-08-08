const heroes = {
    capi:{
        nombre: 'Capitan America',
        poder: 'Aguantar inyeciones sin morir'

    },
    iron:{
        nombre: 'Ironman',
        poder: 'absurda cantidad de dinero'
    },
    spider:{
        nombre: 'Spiderman',
        poder: 'La mejor reaccion alergica a las picaduras'
    },
}

export const buscarHeroe = (id, callback)=>{

    const heroe = heroes[id];

    if (heroe){
        callback(null, heroe);

    }else{
        callback(`No existe un heroe con el id ${id}`);

    }
    //callback(heroe);

}