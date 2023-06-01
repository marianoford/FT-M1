function ListaEnlazada(){ 
    this.head = null
}
 /* en esta primera funcion estoy creando una instancia padre,_
 que va ser como la locomotora que una a todo los vagones(nodos)
 */
function Nodo(elemento){
    this.valor = elemento;
    this.puntero = null;
}
/* aqui se crea una funcion Nodo que recibe un elemento por parametro,
el elemento se va asignar con this.valor posteriormente, y this.puntero
tambien se asignara posteriormente, en puntero vamos a crear otro nodo 
*/

ListaEnlazada.prototype.add = function (elemento){
    let nodo = new Nodo(elemento)
    let current = this.head                              
/*primero estoy creando una nueva instancia "nodo", que va asignar
un valor a this.elemento// 
despues estoy ensamblando la funcion padre con la funcion hijo,
asigno un valor a this.head(que deja de llamarse null) y esto
une la locomotora con el primer vagon
*/
    if(current === null) { 
        this.head = nodo
              return nodo}
/*este condicional nos esta diciendo que en el caso de que la locomotora 
no tenga un valor asignado(this.head) le asigne el mismo valor que 
le asignó a nodo. lo mas probable es que este condicional se ejecute
una sola vez porque no será necesario enganchar 2 veces la locomotora 
con el primer vagon*/              
    
   while (current.next !== null){
     current = current.next

   }
     current.next = node.
     /*por ultimo, estoy diciendo que mientras que current.next
     (el puntero que va enganchar nuestro vagones)
      se le asigne el valor de current para que deje de estar en null.
      
      y al final, estoy diciendo que current.next( el next que estaba
        vacio en el primer vagon) es igual a node. esto significa que 
        va crear un nuevo nodo dentro de next., en codigo se vería así :
      */

     return
      }

ListaEnlazada.prototype.size = function(){
let current = this.head; // -> ListaEnlazada {head : Node {valor: 5, next: Node { valor:7, next:null}}}
let contador = 0 

if(current === null) {//no está en null
return console.log("Lista vacia");}

while(current !== null){ 
contador++
current = current.puntero} /*-> mediante esta manera cambia al
 siguiente nodo accede al siguiente y como nuevamente current 
 no es = a null, repite el proceso y el contador aumenta 1. 
 y así hasta que current da null   

 */
return contador        }









   function ListaEnlazada(){ 
    this.head = null    
}

function Nodo(elemento) {
    this.valor = elemento;// Node{valor: 7, next null} 
    this.puntero = null;
}

ListaEnlazada.prototype.add = function (elemento){
    let nodo = new Nodo(elemento) // 7
    let current = this.head // 7
     
   if(current === null) { // va entra una vez, y se va asignar 7
        this.head = nodo  // despues no va entrar mas
              return nodo}

    while (current.next !== null){ // va entrar una vez, y luego le
    current = current.next } // va asignar un valor a next
                              // como en la segunda vuelta next ya va
                             // estar asignado, 
    current.next = node // <-- aca va crear un nuevo nodo
return node }       

// ListaEnlazada {head : Node {valor: 5, next: Node { valor:7, next:null}}}


/*----------------------------------------------------------------------------------------*/
function LinkedList(){
    this.head = null;  // esto no contiene ningun nodo, es solo para ensamblar. 
                       //
}
function Node(value){
    this.value = value; // esto lo tengo que asignar cuando lo instancio (new Nodo) si bien
                          // no apunta a nadie, hay que asignarle un valor
   this.next = null;      //esto todavía no apunta a nadie en un principio. 
}

LinkedList.prototype.add = function(value) { // aca agregamos un metodo a la primera funcion.
                                        // por parametro hay que pasarle un valor y con ese
                                         // valor va crear un nodo.
                                          // y luego agregar ese nodo nuevo al final de la lista
                                          //la creacion del primer nodo va modificar el head
                                         // y va unir uno con el otro, pero si dsp creo otros 
                                          // nodos esos otros no van a modificar head, el next
                                           // del ultimo nodo va instanciar al siguiente.  

 this.nodoNuevo = new Node(value) 
 this.current = this.head  //esto va a tomar el valor del head, esta variable va tener una referencia
                          // al primer nodo. y a media que se vna creando nodos va ir cambiando la 
                         // direccion, primero apunta al primero, luego al segundo

 // ! la lista estaba vacía y node pasa a ser el primer nodo
 if(currrent === null) {
     this.head = node   
     return value } // esto se usa para cortar la funcion y ver que valor introducí  

//en caso de que la lista no estaba vacia(porque ya hay un nodo creado). hay que recorrer
//para llegar a crear el segundo nodo.
while(current.next !== null) {
    current = current.next 
}

current.next = nodoNuevo

                                            }

