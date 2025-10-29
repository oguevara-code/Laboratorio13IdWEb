let numeros = [1, 2, 3, 4];

function doblarNumeros(numeros){
    let resultado = [];
    for (let i = 0; i < numeros.length; i++){
        resultado.push(numeros[i] * 2);
    }
    return resultado;
}

console.log(doblarNumeros(numeros));