let arre = [1, 1, 2, 3, 4, 4, 5, 6];

function tieneDuplicados(arre){
    const verificar = new Set (arre);

    return verificar.size !== arre.length; 
}

console.log(tieneDuplicados(arre));