// Desafío. Crea una clase Persona con atributos nombre y apellido, y métodos
// para obtener el nombre completo y la longitud del apellido.

class Persona{
    constructor(nombre:string,apellido:string){
        this.nombre=nombre;
        this.apellido=apellido;
    }
    nombre:string;
    apellido:string;

    getNombreCompleto():string{
        return `${this.nombre} ${this.apellido}`;
    }

    getLongitudApellido():number{
        return this.apellido.length;
    }
}