/*
Escriba una función que tome una cadena de una o más palabras y devuelva la misma cadena, pero con las palabras de cinco o más letras invertidas (al igual que el nombre de este Kata). Las cadenas pasadas consistirán solo en letras y espacios. Los espacios se incluirán solo cuando haya más de una palabra presente.

Ejemplos: 
spinWords( "Hey compañeros guerreros" ) => devuelve "Hey soreñapmoc sorerreug" 
spinWords( "Esto es una prueba") => devuelve "Esto es una abeurp" 
spinWords( "Esta es otra prueba" )=> devuelve "Esto es otra abeurp" 
*/

function spinWords(string){
    //TODO Have fun :)
    let arregloDeStrings = string.split(" ") // convierte el string en un arreglo
    let cadenaFinal = "";
    for(let i = 0 ; arregloDeStrings.length > i ; i++){
      if(arregloDeStrings[i].length >= 5){
        arregloDeStrings[i] = arregloDeStrings[i].split("").reverse().join("") //si el string en la posicion x del arreglo es mayor o igual a 5 lo invierte
      }
      cadenaFinal = cadenaFinal + " " +arregloDeStrings[i] // concatena los strings
    }
    return cadenaFinal.trim(); // elimina los espacios en blanco al inicio y al final de la cadena final
  }

  /* OPCION MAS CORTA Y OPTIMIZADA SACADA DE CODEWARS */

function spinWords(string){
  return string.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}