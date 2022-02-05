import { Person } from "./Typescript"


let persona1: Person = new Person("Pepe", 30, "Alcalá");

console.log(persona1);
persona1.printName()

persona1.yearOfBirth(2022)
console.log(persona1.yearOfBirth(2022));

persona1.getAddress()
console.log(persona1.getAddress());

persona1.setAddress("Madrid")



