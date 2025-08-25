// Crea una función similar que calcule el área de un círculo, tomando el radio como parámetro y devolviendo el resultado
function areaDelCirculo(radio:number):number{
    return Math.PI * Math.pow(radio, 2);
}
//  Crea una función llamada esPar que reciba un número como parámetro y devuelva true si el número es par y false si es impar. Dentro de la función, utiliza el operador módulo (%) para determinar si el número es divisible por 2.
function esPar(numero:number):boolean{
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}
// Desafío: Crea una función llamada sumarArreglo que reciba un arreglo de números como parámetro. La función debe sumar todos los elementos del arreglo y devolver el resultado. Utiliza un bucle for para iterar sobre el arreglo.
function sumarArreglo(arreglo:number[]):number{
    let suma:number = 0;
    for(let i = 0; i < arreglo.length; i++){
        suma += arreglo[i];
    }
    return suma;
}
// Desafío: Crea una función llamada obtenerTipoDato que reciba un parámetro de tipo any. La función debe devolver una cadena de texto (tipo string) que describa el tipo de dato del parámetro que recibió. Por ejemplo, si se le pasa un número, debe devolver "number", si se le pasa un string, debe devolver "string", etc
function obtenerTipoDato(parametro:any):string{
    let texto:string = "Hola"
    return typeof parametro;
}