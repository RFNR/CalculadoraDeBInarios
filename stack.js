class Stack{
    constructor(){
        this.__stack__ = [];
    }

    apilar(valor){
        this.__stack__.push(valor)
        return "Valor apilado!"
    }

    devolverUltimoValorApilado(){
        return this.__stack__[this.__stack__.length - 1]
    }

    sacar(){
        this.__stack__.pop()
        return "Se ha quitado el ultimo valor apilado!"
    }

    devolverElProximoValorASacar(){
        return this.__stack__[this.__stack__.length - 1]
    }

    size(){
        return this.__stack__.length
    }

    verlaPila(){
        return this.__stack__
    }
    
}
var stack = new Stack()


function balanced(exp) {
    // Tu código aca:
    let contadorIzq = 0;
    let contadorDer = 0;
    for(let i = 0 ; exp.length > i ; i++){
      if(exp[i] === "(") contadorIzq++;
      if(exp[i] === ")") contadorDer++;
    }
    return contadorDer === contadorIzq ? 0 : 1;
  }