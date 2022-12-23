class ClasePadre{
    a
    b
    constructor(a, b){
        this.a = a
        this.b = b
    }

    metodoEjemplo(){
        console.log("Mensaje desde la clase padre")
        console.log("valor de a: " + this.a)
        console.log("valor de b: " + this.b)
    }
}