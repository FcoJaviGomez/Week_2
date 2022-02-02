let myLib = require("./persona");


let javi = new myLib.Persona(1.75, 70)
console.log();
console.log(javi.indiceDeMasaCorporal());
console.log(javi.calculoEdad(2022));
javi.printAll()
javi.printHobbies()