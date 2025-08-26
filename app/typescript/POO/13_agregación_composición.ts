// Ejercicio 1: Sistema de un ordenador
// Crea clases para los componentes de un ordenador como PlacaMadre, CPU y Memoria. Luego, crea una clase Computadora que esté compuesta por instancias de estas clases. En el constructor de Computadora, instancia los componentes, demostrando una relación de composición.

class PlacaMadre{
    private modelo:string;
    private socket:string;

    constructor(modelo:string,socket:string){
        this.modelo = modelo;
        this.socket = socket;
    }
}

class CPU{
    private modelo:string;
    private velocidadGHz:number;

    constructor(modelo:string,velocidadGHz:number){
        this.modelo = modelo;
        this.velocidadGHz = velocidadGHz;
    }
}

class Memoria{
    private capacidadGB:number;

    constructor(capacidadGB:number){
        this.capacidadGB = capacidadGB;
    }
}

class Computadora{
    private placaMadre:PlacaMadre;
    private cpu:CPU;
    private memoria:Memoria;

    constructor(placaMadre:PlacaMadre,cpu:CPU,memoria:Memoria){
        this.placaMadre = placaMadre;
        this.cpu = cpu;
        this.memoria = memoria;
    }
}

// Ejercicio 2: Sistema de un coche
// Diseña una clase Rueda y una clase Motor. Crea una clase Coche que tenga como atributos un array de Ruedas (agregación, porque las ruedas pueden existir sin el coche) y una instancia de Motor (composición, porque el motor es una parte integral del coche).

class RuedaCoche{
    private marca:string;
    private modelo:string;

    constructor(marca:string,modelo:string){
        this.marca = marca;
        this.modelo = modelo;
    }
}

class MotorCoche{
    private potencia:number;

    constructor(potencia:number){
        this.potencia = potencia;
    }
}

class Coche{
    private ruedas:RuedaCoche[];
    private motor:MotorCoche;

    constructor(ruedas:RuedaCoche[],motor:MotorCoche){
        this.ruedas = ruedas;
        this.motor = motor;
    }
}

// Ejercicio 3: Sistema Universidad
// Crea una clase Departamento y una clase Profesor. La clase Universidad debe estar compuesta por múltiples Departamentos. A su vez, cada Departamento debe tener una lista de Profesores. Modela esta estructura usando agregación y composición.
class Departamento{
    private nombre:string;
    private profesores:Profesor[];

    constructor(nombre:string){
        this.nombre = nombre;
        this.profesores = [];
    }

    public agregarProfesor(profesor:Profesor):void{
        this.profesores.push(profesor);
    }
}

class Profesor{
    private nombre:string;

    constructor(nombre:string){
        this.nombre = nombre;
    }
}

class Universidad{
    private departamentos:Departamento[];

    constructor(){
        this.departamentos = [];
    }

    public agregarDepartamento(departamento:Departamento):void{
        this.departamentos.push(departamento);
    }
}