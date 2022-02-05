import { Book } from "./book";

class Library {
    private books: Book[]
    private address: string
    private manager: string
    constructor(books: Book[], address: string, manager: string) {
        this.books = books
        this.address = address
        this.manager = manager

        // GET
    }


    public getAddress(): string {
        return this.address;
    }

    public getManager(): string {
        return this.manager;
    }
    // SET


    public setNPages(address: string): void {
        this.address = address;
    }

    public setManager(manager: string): void {
        this.manager = manager;
    }

    //metodos

    public toString(): string {
        let resultado: string = ""

        for (let i = 0; i < this.books.length; i++) {

            resultado = resultado + "Book" + (i + 1) + ":\n" +
                this.books[i].toString() + "\n"
        }

        return resultado

    }

    public getNumberOfBooks(): number {

        return this.books.length
    }

    public findByAuthor(author: string): Book[] {
        let resultado = []
        for (let i = 0; i < this.books.length; i++) {

            if (author == this.books[i].getAuthor()) {
                resultado.push(this.books[i])
            }

        }
        return resultado
    }

    // public findFirstByAuthor(author: string): Book{

    //     for (let i = 0; i < this.books.length; i++) {

    //         if (author == this.books[i].getAuthor()) {
    //             return this.books[i]

    //         }
    //     }

    // }

}








export { Library }