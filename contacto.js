let myLib = require("./persona");

class Contacto {

    constructor() {
        this.myArray = [];
    }
    printPersona() {
        for (let i = 0; i < this.myArray.length; i++) {
            this.myArray[i].printAll();
        }
    }
}


module.exports = { Contacto }