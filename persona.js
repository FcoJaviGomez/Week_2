class Persona {

    constructor(altura, peso) {
        this.altura = altura;
        this.sexo;
        this.colorDePelo;
        this.peso = peso;
        this.añoDeNacimiento = 1994
        this.hobbies = [" crossfit", " futbol", " padel", " series", " pelis", " airsoft"]
    }


    indiceDeMasaCorporal() {
        let calculo = this.peso / (this.altura ** 2)
        return calculo
    }

    calculoEdad(añoActual) {
        let edad = añoActual - this.añoDeNacimiento
        return edad
    }
    printAll() {

        for (let propiedad in this) {
            let total = propiedad + " - " + this[propiedad]
            console.log(total);
        }

    }

    printHobbies() {
        for (let i = 0; i < this.hobbies.length; i++) {
            console.log(this.hobbies[i]);
        }

    }
}

let datos = new Persona(1.75, 80);
console.log(datos);
let imc = datos.indiceDeMasaCorporal();
console.log(imc);
let edad = datos.calculoEdad(2022)
console.log(edad);

datos.printAll()
datos.printHobbies()


module.exports = { Persona }

