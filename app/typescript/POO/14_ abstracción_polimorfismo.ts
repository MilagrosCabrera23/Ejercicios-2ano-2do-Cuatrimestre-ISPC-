// Ejercicio 1: Clase abstracta FiguraGeometrica
// Define una clase abstracta llamada FiguraGeometrica con un método abstracto calcularArea(). Luego, crea dos clases que hereden de ella, Cuadrado y Circulo. Cada clase debe implementar el método calcularArea() de forma polimórfica para calcular el área de su figura específica.

abstract class FiguraGeometrica1{
    abstract calcularArea(): number;
}

class Cuadrado1 extends FiguraGeometrica1 {
    private lado:number;

    constructor(lado:number){
        super();
        this.lado = lado;
    }

    public calcularArea(): number {
        return this.lado * this.lado;
    }
}

class Circulo1 extends FiguraGeometrica1 {
    private radio:number;

    constructor(radio:number){
        super();
        this.radio = radio;
    }

    public calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }
}

// Ejercicio 2: Múltiples figuras
// Crea un array que contenga instancias de Cuadrado y Circulo (de forma polimórfica). Itera sobre el array y llama al método calcularArea() para cada objeto, demostrando que aunque el método se llama igual, produce resultados diferentes según el tipo de objeto.

abstract class FiguraGeometrica {
    abstract calcularArea(): number;
}

class Cuadrado extends FiguraGeometrica {
    private lado:number;

    constructor(lado:number){
        super();
        this.lado = lado;
    }

    public calcularArea(): number {
        return this.lado * this.lado;
    }
}

class CirculoCorriente extends FiguraGeometrica {
    private radio:number;

    constructor(radio:number){
        super();
        this.radio = radio;
    }

    public calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }
}
const figuras: FiguraGeometrica[] = [
    new Cuadrado(4), // Área: 16
    new CirculoCorriente(5), // Área: ~78.54
    new Cuadrado(7) // Área: 49
];

// Iteración y demostración del polimorfismo
for (const figura of figuras) {
    console.log("El área es: " + figura.calcularArea());
}