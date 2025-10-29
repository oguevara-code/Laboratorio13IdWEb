function reordenarPalabras(oracion) {
  
  const palabras = oracion.split(" ");
  const palabrasEnMayusculas = palabras.map(palabra => palabra.toUpperCase());
  palabrasEnMayusculas.sort();

  return palabrasEnMayusculas;
}

const resultado = reordenarPalabras("sol luna estrella planeta");
console.log(resultado);