const nombresConRepetidos = ["Ana", "Luis", "María", "Pedro", "Ana", "Luis", "Elena", "María"];

console.log("Arreglo original:", nombresConRepetidos);

const nombresSinRepetidos = new Set(nombresConRepetidos);

console.log("\nSet con nombres únicos:", nombresSinRepetidos);