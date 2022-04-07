// Sumar todos los numeros que aparezcan en este arreglo.
let arreglo = [2, 3, 2, [9, 2, [2, 5]], 2, 2, [5, 9, 2], 3]

function sumaDeArreglosAnidados(arreglo){
    let cc = 0;
    for (let i = 0 ; arreglo.length > i ; i++){
        if(Array.isArray(arreglo[i])){
            cc += sumaDeArreglosAnidados(arreglo[i])
        }
        else{
            cc += arreglo[i]
        }
    }
    return cc;
}
sumaDeArreglosAnidados(arreglo);
/*Si te gustaría ponerte un reto, considera resolver los siguientes ejercicios.

Escribe un programa que invierta una cadena usando recursión. Dada la cadena "freeCodeCamp", el programa debería devolver "pmaCedoCeerf".
Escribe un programa que devuelva el número de veces que aparece una letra en una cadena. Tu programa debería recibir una cadena y la letra.
let programa = (cadena, letra) => {...}
Después, debe devolver el número de veces que la letra aparece en la cadena. Dado el texto "JavaScript" y la letra  "a", su programa debe devolver 2.‌‌‌‌
Pista: Intenta averiguar cuándo quieres que la función deje de llamarse a sí misma y cómo devolver una versión más pequeña del problema cada vez que la función se llama a sí misma.*/
