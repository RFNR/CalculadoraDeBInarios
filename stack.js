class Stack{
    constructor(){
        this.stack = [];
    }

    apilar(valor){
        this.stack.push(valor)
        return "Valor apilado!"
    }

    devolverUltimoValorApilado(){
        return this.stack[this.stack.length - 1]
    }

    sacar(){
        this.stack.pop()
        return "Se ha quitado el ultimo valor apilado!"
    }

    devolverElProximoValorASacar(){
        return this.stack[this.stack.length - 1]
    }

    size(){
        return this.stack.length
    }

    verlaPila(){
        return this.stack
    }
    
}
var stack = new Stack()