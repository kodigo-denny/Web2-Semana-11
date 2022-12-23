class ClaseHija2 extends ClasePadre{
    c
    constructor(a, b, c){
        super(a, b)
        this.c = c
    }

    metodoEjemplo(){
        super.metodoEjemplo()
        console.log("valor de c: " + this.c)
    }
}