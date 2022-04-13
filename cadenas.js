/*
El objetivo de este ejercicio es convertir una cadena en una nueva cadena donde cada carácter de la nueva cadena es "("si ese carácter aparece solo una vez en la cadena original, o ")"si ese carácter aparece más de una vez en la cadena original. Ignore las mayúsculas al determinar si un carácter es un duplicado.

Ejemplos
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/
function duplicateEncode(word){
    let WORD = word.toUpperCase();
    let setWord = new Set(WORD.split(""));
    let arrWord = Array.from(setWord);
    for(let i = 0 ; arrWord.length > i ; i++){
        if(arrWord[i] === WORD)
    }
}//FALTA TERMIANAR