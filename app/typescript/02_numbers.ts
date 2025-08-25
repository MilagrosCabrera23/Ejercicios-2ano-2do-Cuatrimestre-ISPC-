// Modifica el siguiente código (que identifica el mayor de dos números) a fin de encontrar
// ahora el mayor de 3 números.

let num1:number=12;
let num2:number=-5;
let num3:number=7;
if (num1 > num2){
    if (num1 > num3){
        console.log("El mayor de los tres números es: " + num1);
    }
    else{
        console.log("El mayor de los tres números es: " + num3);
    }
}
else{
    if (num2 > num3){
        console.log("El mayor de los tres números es: " + num2);
    }
    else{
        console.log("El mayor de los tres números es: " + num3);
    }
}