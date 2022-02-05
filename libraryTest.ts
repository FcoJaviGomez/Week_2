import { Book } from "./book";
import { Library } from "./library";

// let libretia: Library = new Library(Book[0], "", "")


let libro1 = new Book("titulo", 2, "isbn", "Pepe", "editorial")
let libro2 = new Book("b", 3, "b", "b", "b")

let libreria = new Library([libro1, libro2], "w", "2")

console.log(libreria);

console.log(libreria.getAddress());
console.log(libreria.getManager());

libreria.setNPages("10");
libreria.setManager("20");

console.log(libreria.toString());
console.log(libreria.getNumberOfBooks());
console.log(libreria.findByAuthor("Pepe"));




