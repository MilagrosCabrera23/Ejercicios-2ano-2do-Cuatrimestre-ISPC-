// Desafío. La variable count es una variable especial denominada en el mundo
// de la programación “contador”. ¿Por qué se llamará así?
// También existen otras variables especiales: acumulador y bandera. Investiga qué
// significa y cuál es su utilidad. Finalmente, comparte con la clase o por medio de los foros
// un ejemplo dónde se explique y demuestre su utilidad.

let count: number = 0; // Esta variable se utiliza para contar o llevar un registro de algo, como iteraciones en un bucle.

let totalPrecio: number = 0; // Acumulador
let precios: number[] = [15.50, 20.00, 5.25]; //Acumulador:Se usa para calcular la suma total de una serie de números, la concatenación de cadenas de texto, o el total de un conjunto de datos, como el precio total de una lista de productos en un carrito de compras.

let encontrado: boolean = false; // Una bandera es una variable de tipo booleano (true o false) que se utiliza para señalar si una condición se ha cumplido o no.
// Utilidad: Sirve para tomar decisiones en el código. La bandera se establece en false al principio y cambia a true cuando se cumple una condición deseada, lo que permite que otras partes del programa actúen en consecuencia. Es útil para detener bucles una vez que se encuentra un elemento o para indicar el estado de un proceso.


// Desafío: Declara una variable nombre de tipo string y asígnale tu nombre. Declara una variable edad de tipo number y asígnale un valor. Finalmente, declara una variable esEstudiante de tipo boolean y asígnale el valor true o false. Imprime el valor de las tres variables en la consola.
let nombre:string = "Milagros"; 
let edad:number = 23; 
let esEstudiante:boolean = true;
console.log(`Nombre: ${nombre}, Edad: ${edad}, Estudiante: ${esEstudiante}`);

// Desafío: Declara un arreglo llamado numeros que solo pueda contener valores de tipo number. Agrega al menos tres números y luego imprime el segundo elemento del arreglo en la consola.
let numeros:number[] = [1,3,4,7,9]
console.log(numeros[1]); 

// Desafío: Declara una variable llamada valorDesconocido y utiliza el tipo de dato any. Asigna primero un valor string y luego reasígnalo con un valor number. Imprime el valor de la variable en ambos casos.
let valorDesconocido:any = "Hola";
console.log(valorDesconocido);

valorDesconocido = 42;
console.log(valorDesconocido);

// Desafío: Declara un enum llamado DiasDeLaSemana con los días de la semana, comenzando por Lunes con el valor 1. Luego, declara una variable hoy de este tipo y asígnale el valor de Martes. Imprime el valor numérico de hoy en la consola.
enum DiasDeLaSemana {
    Lunes = 1,
    Martes,
    Miercoles,
    Jueves,
    Viernes
}
let hoy: DiasDeLaSemana = DiasDeLaSemana.Martes;

// Desafío: Crea una función llamada saludo que no devuelva ningún valor. Dentro de la función, imprime un mensaje de saludo en la consola, por ejemplo, "¡Hola, mundo!". Llama a la función saludo.
function saludo():void{
    console.log("¡Hola, mundo!");
}
saludo();