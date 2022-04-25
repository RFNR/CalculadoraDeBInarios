/*
Escriba una función que acepte una matriz de 10 enteros (entre 0 y 9), que devuelva una cadena de esos números en forma de número de teléfono.

Ejemplo
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
El formato devuelto debe ser correcto para completar este desafío.
¡No olvides el espacio después de los paréntesis de cierre!
*/
function createPhoneNumber(numbers){
    let numero = "("
    for(let i = 0 ; numbers.length > i ; i++){
        numero += numbers[i];
        if(numero.length == 4){
            numero += ") "
        }
        if(numero.length === 9){
            numero += "-"
        }
    }
    return numero;
}


/* CODIGO MEJOR VALORADO EN KATA:

function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++){
    format = format.replace('x', numbers[i]);
  }
  return format;
}

*/