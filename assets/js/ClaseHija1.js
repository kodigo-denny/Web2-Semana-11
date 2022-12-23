class ClaseHija1 extends ClasePadre{
    c
    d
    constructor(a, b, c, d){
        super(a, b)
        this.c = c
        this.d = d
    }

    metodoEjemplo(){
        super.metodoEjemplo()
        console.log("valor de c: " + this.c)
        console.log("valor de d: " + this.d)
    }
}