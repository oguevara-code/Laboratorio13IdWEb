function filtrarYTransformar(arr) {

  const positivos = arr.filter(num => num >= 0);
  const cuadrados = positivos.map(num => num ** 2);
  const suma = cuadrados.reduce((acc, num) => acc + num, 0);
  
  return suma;
}

console.log(filtrarYTransformar([2, -3, 4, -1, 5]));