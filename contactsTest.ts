import { Contacts } from "./contacts";
import { Person } from "./Typescript"
let personas: Contacts = new Contacts()

let persona1: Person = new Person("Pepe", 30, "Alcalá");
let persona2: Person = new Person("Alex", 33, "Madrid");

personas.people.push(persona1)
personas.people.push(persona2)
console.log(personas);
personas.printCalendar()
