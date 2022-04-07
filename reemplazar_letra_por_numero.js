/*
En este ejercicio, se requiere que, dada una cadena, reemplace cada letra con su posición en el alfabeto.

a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z

Si algo en el texto no es una cadena, ignóralo y no lo devuelvas.

"a" = 1, "b" = 2, etc
*/
function alphabetPosition(text) {
    var result = "";
    for (var i = 0; i < text.length; i++){
      var code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) result += (code - 64) + " ";
    }
  
    return result.slice(0, result.length-1);
  }
  alphabetPosition("hola") // "8 15 12 1"