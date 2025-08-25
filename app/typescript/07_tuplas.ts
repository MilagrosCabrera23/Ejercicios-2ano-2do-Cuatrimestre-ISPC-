// En la siguiente línea de código, crea una tupla que almacene los datos de un usuario: su nombre (tipo string), su edad (tipo number) y si está activo en el sistema (tipo boolean).
let usuario: [string, number, boolean] = ["Juan", 30, true];
console.log(usuario)

// Desafío: Crea una tupla que almacene la información de un vehículo: el tipo (string), el año de fabricación (number) y si es eléctrico (boolean). Declara una variable llamada miVehiculo con este tipo de tupla y asigna valores para un auto, una moto o una bicicleta. Imprime el tipo y el año de tu vehículo en la consola
let miVehiculo:[string,number,boolean] = ["Auto",2003,false]; 
console.log("Vehiculo: " + miVehiculo[0] + ", Año: " + miVehiculo[1] + ", Esta en servicio? " + miVehiculo[2]);

// Desafío: Declara una tupla llamada Coordenadas para representar un punto en un plano 2D, con un valor para el eje X (number) y otro para el eje Y (number). Crea dos variables con este tipo de tupla, puntoA y puntoB, con valores diferentes.

let coordenadas:[number,number] = [10, 20];
let puntoA:[number,number] = [25, 15];
let puntoB:[number,number] = [5, 10];
console.log("Coordenadas: " + coordenadas);

// Desafío: Las tuplas pueden ser de solo lectura. Declara una tupla llamada InformacionPersonal que contenga el nombre (string) y el número de identificación (number). Haz que esta tupla sea de solo lectura usando la palabra clave readonly. Intenta luego modificar el nombre o el número de identificación para ver el error que te muestra TypeScript.

let informacionPersonal:readonly [string, number] = ["Ana", 123456];
informacionPersonal = ["Maria", 654321]; // Esto genera un error de asignación
