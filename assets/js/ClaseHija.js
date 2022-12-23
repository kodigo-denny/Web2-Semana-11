class ClaseHija extends ClaseHija1{
    e
    constructor(a, b, c, d, e){
        super(a, b, c, d)
        this.e = e
    }

    metodoEjemplo(){
        super.metodoEjemplo()
        console.log("valor de e: " + this.e)
    }

}