// Desafío. Crea una clase Forma con atributos comunes como nombre y métodos
// para obtener el perímetro y el área de la forma. Luego crea la clase Circulo y Rectangulo.
// Ambas deberán implementarse heredando de Forma a fin de obtener el perímetro y el
// área según la forma. Finalmente, investiga ¿Qué es una clase abstracta? ¿Cuándo se utiliza
// en POO? Este ejemplo ¿será útil trabajar con una clase abstracta? Fundamenta.

class Forma{ 
    nombre:string;

    constructor(nombre:string){
        this.nombre = nombre; 
    }
    obtenerPerimetro():number{
        return 0;
    }
    obtenerArea():number{
        return 0;
    }
}

class Circulo extends Forma{
    radio:number; 

    constructor(radio:number){
         // Llama al constructor de la clase padre (Forma) con el nombre 'Círculo'
        super("Círculo");
        this.radio = radio;
    }
    obtenerArea(): number {
        return Math.PI * this.radio * this.radio;
    }

    obtenerPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}

class Rectangulo extends Forma{
    ancho:number;
    alto:number;

    constructor(ancho:number, alto:number){
        super("Rectangulo");
        this.ancho = ancho;
        this.alto = alto;
    }

    obtenerArea(): number {
        return this.ancho * this.alto;
    }

    obtenerPerimetro(): number {
        return 2 * (this.ancho + this.alto);
    }
}
