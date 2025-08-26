// Ejercicio 1: Clase CuentaBancaria
// Define una clase CuentaBancaria con un atributo privado _saldo de tipo number. Crea un constructor para inicializar el saldo. Implementa métodos públicos depositar(monto) y retirar(monto) que modifiquen el saldo de forma controlada. Agrega un método consultarSaldo() para mostrar el saldo actual.

class CuentaBancaria{
    private saldo:number; 

    constructor(saldoInicial:number){
        this.saldo = saldoInicial;
    }
    public depositar(monto:number):void{
        this.saldo += monto;
    }

    public retirar(monto:number):void{
        this.saldo -= monto;
    }

    public consultarSaldo():number{
        return this.saldo;
    }
}
// Ejercicio 2: Clase Rectangulo con validación
// Crea una clase Rectangulo con los atributos privados _ancho y _alto. Usa "getters" y "setters" para permitir el acceso y la modificación de estos atributos. En el "setter" de _ancho y _alto, agrega una validación para asegurar que el valor ingresado es un número positivo. Si no lo es, asigna un valor por defecto, como 1.

class RectanguloCorriente{
    private ancho:number;
    private alto:number;

    constructor(ancho:number,alto:number){
        this.ancho = ancho;
        this.alto = alto;
    }
    public get Ancho():number{
        return this.ancho;
    }

    public set Ancho(valor:number){
        if(valor > 0){
            this.ancho = valor;
        }else{
            this.ancho = 1;
        }
    }

    public get Alto():number{
        return this.alto;
    }

    public set Alto(valor:number){
        if(valor > 0){
            this.alto = valor;
        }else{
            this.alto = 1;
        }
    }
}

// Ejercicio 3: Clase Empleado
// Define una clase Empleado con los atributos privados _nombre y _salario. Utiliza un constructor para inicializar estos valores. Luego, implementa un método calcularAumento(porcentaje) que incremente el salario, asegurándote de que el porcentaje sea válido (por ejemplo, entre 0 y 1).

class Eempleado{
    private nombre:string; 
    private salario:number; 
    
    constructor(nombre:string,salario:number){
        this.nombre = nombre;
        this.salario = salario;
    }

    public calcularAumento(porcentaje:number):void{
        if(porcentaje > 0 && porcentaje <= 1){
            this.salario += this.salario * porcentaje;
        }
    }
}