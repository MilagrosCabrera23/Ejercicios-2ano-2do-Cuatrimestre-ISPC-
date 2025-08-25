// Dado el siguiente arreglo:
// let amigos = ['Ana', 'Monica', 'José, 'Camila', 'Raquel', 'Matías'];
// 1- Devuelve la posición (el index, un número) del array del amigo “Matías”.
let amigos = ['Ana', 'Monica', 'José', 'Camila', 'Raquel', 'Matías'];
console.log(amigos.indexOf("Matías"));
// 2- Devuelve el mismo array añadiendo los amigos de la infancia “Ivana” y “Andrés” como
// otro array.
let amigosInfancia = ['Ivana', 'Andrés'];
console.log( amigos.concat(amigosInfancia));
// 3- Agrega un nuevo amigo “María” y devuelve el nro de amigos.
amigos.push("María");
console.log(amigos.length);
// 4- Elimina el último elemento del arreglo y devuelve el nombre del amigo eliminado.
console.log(amigos.pop());
// 5- Devuelve un arreglo ordenado alfabéticamente.
console.log(amigos.sort());