class Dog extends Animal{
    constructor(nombre, edad){
        super(nombre, edad)
    }

    makeSound(){
        super.makeSound()
        console.log("Ladrar")
    }
}