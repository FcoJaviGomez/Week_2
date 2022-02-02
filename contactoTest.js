let myLib = require("./persona");
let myLib1 = require("./contacto");



let personasTotal = new myLib1.Contacto()
let persona1 = new myLib.Persona(1, 2)
let persona2 = new myLib.Persona(3, 4)
let persona3 = new myLib.Persona(5, 6)

personasTotal.myArray.push(persona1)
personasTotal.myArray.push(persona2)
personasTotal.myArray.push(persona3)


console.log(personasTotal)

