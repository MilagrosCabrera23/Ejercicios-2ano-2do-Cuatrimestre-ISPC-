// Define una clase llamada Vehiculo. Esta clase debe tener los atributos marca, modelo y anio. Luego, crea una instancia de esta clase (un objeto) que represente un vehículo específico, por ejemplo, un "Ford Fiesta" del año 2022. Imprime los atributos del objeto en la consola

class Vehiculo{
    marca:string;
    modelo:string;
    anio:number;

    constructor(marca:string, modelo:string, anio:number){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
}

const miAuto = new Vehiculo("Ford", "Fiesta", 2022);
console.log(miAuto);

// Crea una clase llamada Estudiante con los atributos nombre, apellido y promedio. Incluye un constructor que inicialice estos atributos. Adicionalmente, crea un método llamado obtenerNombreCompleto() que devuelva el nombre y apellido juntos. Por último, crea una instancia de Estudiante y llama al método obtenerNombreCompleto().

class Estudiante{
    nombre:string; 
    apellido:string;
    promedio:number;

    constructor(nombre:string, apellido:string, promedio:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.promedio = promedio;
    }

    obtenerNombreCompleto(): string {
        return `${this.nombre} ${this.apellido}`;
    }
}

const estudiante1 = new Estudiante("Juan", "Pérez", 8.5);
console.log(estudiante1.obtenerNombreCompleto());

// Crea una clase 
// Persona con atributos nombre y apellido, y métodos para obtener el nombre completo y la longitud del apellido.
class PersonaCorriente{
    nombre:string;
    apellido:string;

    constructor(nombre:string, apellido:string){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    obtenerNombreCompleto(): string {
        return `${this.nombre} ${this.apellido}`;
    }

    obtenerLongitudApellido(): number {
        return this.apellido.length;
    }
}
