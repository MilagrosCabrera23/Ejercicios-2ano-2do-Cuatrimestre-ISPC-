// Desafío ¿Es posible declarar una estructura de control for sin la expresión de
// inicialización y sin expresión de incremento? ¿Qué consideraciones debería tener en
// cuenta para trabajar la estructura de control for de esta forma?
// Sí, es posible declarar una estructura de control for sin la expresión de inicialización y sin la expresión de incremento.


// Haciendo uso de la estructura de control for intenta:
let factorial= 1;
// 1. Calcular el factorial de un número.
for(let i = 5; i > 0; i--) {
    factorial *= i;
    console.log(`El factorial de 5 es: ${factorial}`);
}

// 2. Calcular la sumatoria de los números comprendidos en el rango [10,50]
let sumatoria = 0;
for(let i = 10; i <= 50; i++) {
    sumatoria += i;
    console.log(`Sumatoria hasta ${i}: ${sumatoria}`);
}
// 3. Calcular el promedio de un número.
let promedio = sumatoria / (50 - 10 + 1);
console.log(`El promedio de los números del 10 al 50 es: ${promedio}`);