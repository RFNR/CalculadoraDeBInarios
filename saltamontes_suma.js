/*
Suma
Escriba un programa que encuentre la suma de todos los números del 1 al num. El número siempre será un entero positivo mayor que 0.

Por ejemplo:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/
var summation = function (num) {
    let contador = 1;
    let suma = 0;
    while(contador <= num){
        suma += contador++;
    }
    return suma;
}

/* CODIGO MEJOR VALORADO EN KATA:

var summation = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i++) {
      result += i;
    }
    
    return result;
}

*/