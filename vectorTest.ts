import { Vector } from "./vector";



let vector1: Vector = new Vector(3, 10)

let v2: Vector = new Vector(3, 4)

console.log("v0", vector1)

vector1.print()

v2.print()

console.log(vector1.add(v2));

console.log(vector1.subs(v2));

console.log(vector1.mult(v2));

console.log(vector1.multNumber(2))