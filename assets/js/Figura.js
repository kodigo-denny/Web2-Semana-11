class Figura{
    lado1
    constructor(lado1){
        this.lado1 = lado1
    }

    calcularArea(){
        return this.lado1
    }
}



class Cuadrado extends Figura{
    constructor(lado1){
        super(lado1)
    }

    calcularArea(){
        return this.lado1*this.lado1
    }
}

class Circulo extends Cuadrado{
    constructor(lado1){
        super(lado1)
    }

    calcularArea(){
        return Math.PI * super.calcularArea()
    }
}

class Rectangulo extends Figura{
    lado2
    // b, h
    constructor(lado1, lado2){
        super(lado1)
        this.lado2 = lado2
    }

    calcularArea(){
        return this.lado1*this.lado2
    }
}

class Trapecio extends Rectangulo{
    lado3
    // b, h, B
    constructor(lado1, lado2, lado3){
        super(lado1, lado2)
        this.lado3 = lado3
    }

    calcularArea(){
        return (this.lado3+this.lado1)*this.lado2 / 2
    }
}

class Triangulo extends Rectangulo{
    //b, h
    constructor(lado1, lado2){
        super(lado1, lado2)
    }

    calcularArea(){
        return super.calcularArea() / 2
    }
}

class Trapecio2 extends Triangulo{
    // b, h, B
    constructor(lado1, lado2, lado3){
        super(lado3+lado1, lado2)
    }
}

class Romboide extends Rectangulo{
    constructor(lado1, lado2){
        super(lado1, lado2)
    }
}