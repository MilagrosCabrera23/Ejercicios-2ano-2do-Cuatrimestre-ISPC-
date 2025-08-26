// Desafío. Intenta a continuación crear con typescript la siguiente jerarquía de
// clases.

interface IVehiculo {
   encender():void; 
   apagar():void;
}

class Rueda{
    presion:number;

    constructor(presion:number){
        this.presion = presion;
    }

    rotar():void{
        console.log(`La rueda está girando a ${this.presion} PSI.`);
    }
}

class Aromatizador{
    aroma:string;

    constructor(aroma:string){
        this.aroma = aroma;
    }
    difundirAroma():void{
        console.log(`El aromatizador está difundiendo el aroma a ${this.aroma}.`);
    }
}

class Taxi implements IVehiculo{
    marca:string;
    modelo:string;
    color:string;
    motorEncendido:boolean = false;
    velocidad:number = 0;

    private ruedas: Rueda[] = []; 
    private aromatizador: Aromatizador;

    constructor(marca:string, modelo:string, color:string){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.aromatizador = aromatizador;

         for (let i = 0; i < 4; i++) {
            this.ruedas.push(new Rueda(32));
        }
    }
   encender(): void {
        if (!this.motorEncendido) {
            this.motorEncendido = true;
            console.log(`El ${this.marca} ${this.modelo} ha sido encendido.`);
        } else {
            console.log(`El motor ya está encendido.`);
        }
    }
    apagar(): void {
        if (this.motorEncendido && this.velocidad === 0) {
            this.motorEncendido = false;
            console.log(`El ${this.marca} ${this.modelo} ha sido apagado.`);
        } else if (this.velocidad > 0) {
            console.log(`No se puede apagar el motor en movimiento. Primero frene.`);
        } else {
            console.log(`El motor ya está apagado.`);
        }
    }

    obtenerPromedioKmPorViaje(): number {
        // Lógica para obtener el promedio de km por viaje
        return 0;
    }
       chequearRuedas(): void {
        this.ruedas.forEach(rueda => rueda.rotar());
    }
}

class Convertible implements IVehiculo {
    marca:string;
    modelo:string;
    color:string;
    motorEncendido:boolean = false;
    velocidad:number = 0;

      constructor(marca:string, modelo:string, color:string){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }

   encender(): void {
        if (!this.motorEncendido) {
            this.motorEncendido = true;
            console.log(`El ${this.marca} ${this.modelo} ha sido encendido.`);
        } else {
            console.log(`El motor ya está encendido.`);
        }
    }
    apagar(): void {
        if (this.motorEncendido && this.velocidad === 0) {
            this.motorEncendido = false;
            console.log(`El ${this.marca} ${this.modelo} ha sido apagado.`);
        } else if (this.velocidad > 0) {
            console.log(`No se puede apagar el motor en movimiento. Primero frene.`);
        } else {
            console.log(`El motor ya está apagado.`);
        }
    }

}

