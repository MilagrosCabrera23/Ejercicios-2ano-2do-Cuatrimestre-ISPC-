// Ejercicio 1: Jerarquía de clases Animal
// Crea una clase base Animal con un método emitirSonido(). Luego, crea dos clases derivadas, Perro y Gato, que hereden de Animal. Cada subclase debe sobrescribir el método emitirSonido() para emitir un sonido específico ("¡Guau!" para el perro y "¡Miau!" para el gato).

class Animal{
    emitirSonido():string{
        return "Sonido genérico de animal";
    }
}
// Ejercicio 2: Desafío del documento
class Perro extends Animal{
    emitirSonido():string{
        return "¡Guau!";
    }
}

class Gato extends Animal{
    emitirSonido():string{
        return "¡Miau!";
    }
}


// Ejercicio 2: Clase Operacion del documento
// Define una clase base |Operacion con atributos protected valorA, valorB y resultado. [cite_start]Crea dos subclases, 

// Suma y Resta, que hereden de Operacion y extiendan su funcionalidad con los métodos Sumar() y Restar() respectivamente.

class Operacion{
    protected valorA:number; 
    protected valorB:number;
    protected resultado:number;

    constructor(valorA:number, valorB:number){
        this.valorA = valorA;
        this.valorB = valorB;
        this.resultado = 0;
    }
}

class Suma extends Operacion{
    Sumar():number{
        this.resultado = this.valorA + this.valorB;
        return this.resultado;
    }
}

class Resta extends Operacion{
    Restar():number{
        this.resultado = this.valorA - this.valorB;
        return this.resultado;
    }
}