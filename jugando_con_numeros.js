/*

Algunos números tienen propiedades divertidas. Por ejemplo:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Dado un entero positivo n escrito como abcd... (a, b, c, d... siendo dígitos) y un entero positivo p

queremos encontrar un entero positivo k, si existe, tal que la suma de las cifras de n elevadas a las sucesivas potencias de p sea igual a k * n.
En otras palabras:

¿Existe un número entero k como: (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

Si es el caso devolveremos k, si no devolveremos -1.

Nota : n y p siempre se darán como números enteros estrictamente positivos.

digPow(89, 1) deberia retornar 1 ya que 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) deberia retornar -1 ya que no existe un entero k que verifique que 9¹ + 2² = 92 * k
digPow(695, 2) deberia retornar 2 ya que 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) deberia retornar 51 ya que 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

*/

function digPow(n, p){
    let arreglo = ("" + n).split("");
    let suma = 0;
    for(let i = 0; arreglo.length > i ; i++){
        suma += arreglo[i]**p
        p++;
    }
    if(suma%n === 0){
        return suma/n;
    }
    return -1;
}

/* CODIGO MEJOR VALORADO EN KATA:
function digPow(n, p) {
  var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
  return x % n ? -1 : x / n
}
*/


digPow(35255, 6)

