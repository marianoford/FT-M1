'use strict';

const { prototype } = require("@11ty/eleventy");

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
}
BinarySearchTree.prototype.insert = function (value){
   if(value < this.value){ 
   if(this.left === null){
   this.left = new BinarySearchTree(value)}
  /**esto esta diciendo que, si el valor pasador por parametro es menor a value y si el espacio de la izquierda
   * no esta ocupado por otro nodo, que cree un nuevo nodo en ese lugar */ 
  else this.left.insert(value) }
  /* y en caso de que exista que un nodo ya creado en el lado izquierdo, que aplique la funcion insert nuevamente
  lo que va buscar algun espacio que no tenga a this.left definido y allí creará un nuevo nodo  */
  else if(value > this.value){
   if(this.right === null){
      this.right = new BinarySearchTree(value)
   } else { this.right.insert(value)}
   /**exactamente lo mismo ocurre de este lado.  */
  }
}
const nuev = new BinarySearchTree(20)
nuev.insert(15)
nuev.insert(12)
nuev.insert(21)
nuev.insert(25)
console.log(nuev)



BinarySearchTree.prototype.size = function(){
 let contador = 1
 if(this.left !== null)
 { contador = contador + this.left.size()}
 
 if(this.right !== null) {
   contador = contador + this.right.size()}
 return contador 
 /*el contador empieza en 1, porque es el numero base del arbol. 
  luego el condicional dice, hay algun valueo en el lado izquierdo?, de ser así
   sumar una unidad al contador, hasta que el lado izquierdo de null. ahí el condicional
   deja de sumar al contador. exactamente lo mismo pasa del lado derecho
   lo que ocurre, es que esta funcion va ir bajando entre los nodos hasta que encuentre el numero
   en el caso de que el numero no esté, en algun momento this.left o this rigth van a ser === null y se dejara
   de ejecutar el condicional y retorna false. 
   sin embargo, en el caso de que el numero se encuentre, this.value(el del sub nodo) va ser igual a
    value(el que le pasamos por parametro) y ahi retornará true.  */
}
console.log(nuev.size())

BinarySearchTree.prototype.contains = function(value){ 
  if(this.value === value){
   return true
  }
  if(value < this.value && this.left !== null) {
   return this.left.contains(value)}
   if(value > this.value && this.right !== null){
      return this.right.contains(value)
   }
  return false

  /* si el numero buscado, es igual value(o sea, el primer numero del arbol) retornar true
   el primer condicional nos dice, que si el valor, es menor a this.value, o sea iría a la izquierda, y si a la izquierda
   existiriera un numero (!==null quiere decir que hay un numero) que vuelva a aplicar la funcion, para bajar un nivel
   más en el arbol. se llama a la recursion de la funcion contains hasta que this.left sea === null. Cuando 
  */ 
}
console.log(nuev)
console.log(nuev.contains()) 

BinarySearchTree.prototype.depthFirstForEach = function(cb,pedido){
   /* pedido puede ser 
   1) in-order: left, root, right
   2)pre-order:root,left, rigth
   3)póst-order:left,right, root
   4) undefinded*/
   if(pedido ==="in-order" || pedido === undefined){
      if(this.left !== null) this.left.depthFirstForEach(cb,pedido)
      cb(this.value)
   if(this.right) this.right.depthFirstForEach(cb,pedido)
   }
   /* vamos a suponer que yo le mande in order,el callback es una funcion que pushea un valor(que le pasamos con cb)
   y lo q hace es pushear ese valor en un value. si quiero que se recorra en in order, primero preg si hay algo a
   a la izq, y si hay algo, se vuelve a ejecutar todo otra vez, cuando da null, toma el cb de la linea 92. 
    el cb va tomar ese valor y lo va pushear en una funcion.(), el valor es el numero que está antes del casillero
    null. por ultimo vuelve a ejecutar, si no hay nada a la izq,ya tomo el valor y no hay nada a la derecha termina el
    contexto. ahora va repetir lo mismo del lado derecho.
    primero llama al cb de la linea 92, y va pushear el numero root, y despues va por el lado derecho. si hay algo
    aplica recursion, otra vez, hasta que la izq de null, cuando dan null aplica el cb y guarda el valor y así
    hasta que recorra todo el arreglo   */

    if(pedido === "pre-order"){
      cb(this.value)
      if(this.left !== null) this.left.depthFirstForEach(cb,pedido)
      if(this.right) this.right.depthFirstForEach(cb,pedido)
    }

    if(pedido === "post-order"){
         
      if(this.left !== null) this.left.depthFirstForEach(cb,pedido)
      if(this.right) this.right.depthFirstForEach(cb,pedido)
      cb(this.value)
    }
}
BinarySearchTree.prototype.breadthFirstForEach = function(cb, value){
   /* este metodo recorre por niveles, este metodo recibe un callback. al igual que el anterior, se ejecuta el cb
    que pushea los valores recibidos a un value. funciona como una queeue, voy del primero al ultimo  */
    if(this.left !== null){
      value.push(this.left);
   }
  /* primero miro lo que tengo a la izquierda, y hago un push de todo lo que tengo en el arbol,*/

   if(this.right !== null){
      value.push(this.right);
      /* de todo el arbol que está a la derecha hago un push y lo almaceno en el value. */
   }
    cb(this.value)
    /* ejecuto el callback y se pushe el root, o sea ,el primer n del arbol  */
    if(value.length > 0){
      value.shift().breadthFirstForEach()
    }
    /*si el value.length es mayor a 0, aplica la recursividad, mediante value.shift saca el primer numero pusheado
    del value, lo saca del value, y se aplica la recusion a ese numero, que va pasar
    a ser el root del arbol, se le vuelve a aplicar los ifs, y al final el cb termina guardando ese numero
     */


   }

/*default parameters: podemos agregar parametros por defecto a las funciones, ej, en el caso de arriba nos estan pasando
 una funcion por defecto, puedo agregar parametros por default= ej: cb, value =[], al hacer esto se declara una variable dentro
 esto se usa mucho para la recursion.  */



/*
let tree = new BinarySearchTree(20)
tree.insert(8)
console.log(tree)
BinarySearchTree.prototype.size = function(){}
BinarySearchTree.prototype.contains = function(){}
BinarySearchTree.depthFirstForEach = function(){}
BinarySearchTree.breadthFirstForEach = function(cb,queue = []){
   //
}
*/

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};


