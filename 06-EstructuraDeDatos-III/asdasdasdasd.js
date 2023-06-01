class BST{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null
    }
}



















//metodo para crear un ARBOL BINARIO  DE BUSQUEDA 
const root = 23
const node1 = new BST(8)
const node2 = new BST(32)
const node3 = new BST(3)
const node4 = new BST(12)
const node5 = new BST(7)

const treeTest = new BST(root)
console.log(treeTest)
treeTest.left = node1
treeTest.right = node2 
treeTest.left.left= node3
treeTest.left.left.right = node4
treeTest.left.left.right.left = node5 

console.log(treeTest)


//metodo para recorrer : 
//este hace un recorrido lineal de arriba abajo y de izquierda a derecha, como cuando leemos un libro
BST.prototype.breadthFirstSearch = function(value){
    

}
// depth-first-search(DFS)
/* se divide en 3 maneras.
 a) preorder 
 b) inorder
  c)postorder*/

/*      input: 23,8,32,3,12,31
                  23
        8                32
   3       12         31
 

*/
/*preorder: toma el valor primero, avanza a la izquierda y luego a la derecha. -> value left rigth
  preOrder -> toma el valor(23), toma left (8), toma left(3)no hay mas a la izq // toma el 12, no tiene nada izq dcha
   sube al 23, y aplica el valor 32, va la izq y tiene 31, en izq y dch no tiene, sube al 32, tampoco tiene,
     el array queda ("23",8,3,12,32,31)*/

/*in OrdeR: hace izquierda, luego valor, y luego derecha. 
  inOrder -> va a la izq, 3 notiene mas, vuelve arriba y toma 8, y va a la derecha, notiene mas 
  y toma 12, sube al 8, sube al 23, toma el 23, va a la derecha 32, luego va a la izq 31, lo toma, sube al 32, y lo toma
  vuelve a subir al 23, y ahi queda 
  queda: 3,8,12,"23",31,32*/

/*port order: es izquierda, derecha y valor
   baja a 8, luego va a la izquierda, va 3, no hay y toma el 3, sube al 8 baja al 12 y como no tiene nada lo toma
   vuelve al 8, y toma el 8, luego sube al 23, va a la derecha, va a la izquierda, toma el 31, sube al 32
   como no tiene nada a la derecha y toma el 32. y al final toma el raiz  
   queda: 3,12,8,31,32,"23"*/