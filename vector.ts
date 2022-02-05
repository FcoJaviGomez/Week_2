class Vector {

    private elements: number[]

    //n: longitud    k: valor

    constructor(n: number, k: number) {
        this.elements = [];
        for (let i = 0; i < n; i++) {
            this.elements.push(Math.floor(Math.random() * k))

        }
    }
    //METODOS
    public print() {

        console.log(this.elements);

    }
    public add(v1: Vector): Vector {
        let resultado: Vector = new Vector(0, 0)

        if (this.elements.length == v1.elements.length) {

            for (let i = 0; i < this.elements.length; i++) {
                let suma: number = this.elements[i] + v1.elements[i]
                resultado.elements.push(suma)
                console.log(suma);

            }
        }

        return resultado
    }
    public subs(v1: Vector): Vector {
        let resultado: Vector = new Vector(0, 0)

        if (this.elements.length == v1.elements.length) {
            for (let i = 0; i < this.elements.length; i++) {
                let resta: number = this.elements[i] - v1.elements.length
                resultado.elements.push(resta)
            }
        }
        return resultado
    }

    public mult(v1: Vector): Vector {
        let resultado = new Vector(0, 0)
        if (this.elements.length == v1.elements.length) {
            for (let i = 0; i < this.elements.length; i++) {
                let mult = this.elements[i] * v1.elements[i]
                resultado.elements.push(mult)
            }
        }
        return resultado
    }


    public multNumber(n: number): Vector {
        let resultado = new Vector(0, 0)
        for (let i = 0; i < this.elements.length; i++) {
            let producto = this.elements[i] * n
            resultado.elements.push(producto)

        }
        return resultado
    }


}


export { Vector }