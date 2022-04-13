// Calculadora de factoriales

function factorial(n){

    if(n === 1 || n === 0) return 1;
    else if (n < 0) return "No existe el factorial de un numero negativo.";
    return n * factorial(n - 1)
    
}
factorial(10);