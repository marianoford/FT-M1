'use strict';

const { normalizeReference } = require("markdown-it/lib/common/utils");

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que,
 siendo n un número natural, su factorial (representado como n!) 
 es el producto de n por todos los números naturales menores que él y 
 mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, 
tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma
, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado 
de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7
 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if(n === 0 || n === 1 ) return n // estoy declarando que en casi de que n  igual a 1 o igual a 0, que retorne el numero
   else if (n < 0) return 0  // aca le estoy diciendo que en caso de que n sea menor a 0(negativo) que retorne 0
  return n * nFactorial(n - 1) // en esta linea le estoy diciendo que retorne el valor de n multiplicado por la funcion padre. pero dentro de la funcion llamo al numero restandole 1 
}
//5 
  // 5 *  f(5 - 1)
   // 4 * f(4 - 1)

console.log(nFactorial(4))
/*
function fib (n, a = 0, b = 1) {
  if (n === 0){
      return a;
  }
  else if (n === 1){
      return b;
  }
   return fib(n - 1, b, a + b);
}
*/
function nFibonacci(n) {
  if( n === 0) return 0 // determino que si n es igual a cero retorne cero porque para que esta funcion surta efecto es necesario sumar numeros
  else if (n === 1) return 1 // lo mismo ocurre aquí, es necesario que el numero sea mayor a 2 así pueden sumarse entre si
  else if (n <= 0) return n
  else {
   return  nFibonacci(n - 2 ) +  nFibonacci (n - 1)}
             
}
console.log(nFibonacci(11))
// numero = numero - 2 + numero 
// 0 0 1 2 3 5 8 13 21 34 55 89

/* la formula del metodo fibonacci es la siguiente: Numero = Numero - 2 + Numero - 1, 
en  la funcion estoy diciendo que retorne la funcion restando el numero que se pasa
por parametro restandole dos, esto me da resultado 1; luego le estoy pidiendo que
reste el numero pasado por parametro menos uno, esto em da resultado 2. y al final
le pido que sume ambos numeros. 
*/

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, 
donde el primer elemento que ingresa es el primero que se quita.
 Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden.
   Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

class Queue {
  constructor() {

    this.fila = []; // en esta linea estoy definiendo un arreglo vacío donde se van a depositar 

    // los elementos 
  }
  enqueue(valor) {
    return this.fila.push(valor);
  }
  dequeue() {
    return this.fila.shift();
  }
  size() {
    return this.fila.length;
  }
}


/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
