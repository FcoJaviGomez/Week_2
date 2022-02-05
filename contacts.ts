import { Person } from "./Typescript"
let persona1: Person = new Person("Pepe", 30, "Alcalá");
class Contacts {

    public people: Person[]

    constructor() {
        this.people = []
    }

    public printCalendar() {
        console.log(this.people);

    }
}

export { Contacts }