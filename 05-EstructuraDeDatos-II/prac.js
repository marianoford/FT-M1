

/*function ListaEnlazada(){
    this.head = null
}

function CrearNodo(valor) {
    this.nodo = valor;
    this.next = null
}

ListaEnlazada.prototype.agregar= function (valor) {
    let nuevoNodo = new CrearNodo(valor);
    let current = this.head
    
    if(current === null){
        this.head = nuevoNodo
    }
    else {
    while(current.next !== null){
        current = current.next 
    }
    current.next = nuevoNodo
    }
}
ListaEnlazada.prototype.search = function(nodo) {
    let referencia = this.head
    while(!referencia.hasOwnProperty(nodo)){
        referencia = referencia.next;
        return true
    }
}

let nuevaLista = new ListaEnlazada()
nuevaLista.agregar("matecito")
console.log(nuevaLista) */

/*
function ListaEnlazada(){
    this.head = null}

function Nodo(valor) {
    this.valor = valor;
    this.siguienteNodo = null
}

ListaEnlazada.prototype.agregar = function(valor){
    let nuevoNodo = new Nodo(valor)
    let nodoAnterior = this.head

    if(nodoAnterior === null){
        this.head = nuevoNodo
        return nuevoNodo
    }
    else{
    while(nodoAnterior.siguienteNodo !== null) {
        nodoAnterior = nodoAnterior.siguienteNodo
    }
    }
    nodoAnterior.siguienteNodo = nuevoNodo
     
}

let nuevas = new ListaEnlazada()
nuevas.agregar("tito")
nuevas.agregar("tito")
console.log(nuevas);
*/

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots,
 contenedores, o casilleros; es decir, posiciones posibles para almacenar
  la información), donde guardaremos datos en formato key-parametro 
  (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets ( ). 
(Luego de haber pasado todos los tests, a modo de ejercicio adicional,
   pueden modificar un poco la clase para que reciba la cantidad de 
   buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un 
  dato. Recibe un input alfabético, suma el código numérico de cada 
  caracter del input (investigar el método charCodeAt de los strings) 
  y calcula el módulo de ese número total por la cantidad de buckets; 
  de esta manera determina la posición de la tabla en la que se 
  almacenará el dato.

  - set: recibe el conjunto key parametro (como dos parámetros distintos),
   hashea la key invocando al método hash, y almacena todo el conjunto 
   en el bucket correcto.
  - get: recibe una key por parámetro, y busca el parametro que le
   corresponde en el bucket correcto de la tabla.
  - haskey: recibe una key por parámetro y consulta si ya hay algo
   almacenado en la tabla con esa key (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla.
 Primero puedo chequear, con haskey, si ya hay algo en la tabla con el
  nombre 'instructora'; luego, invocando set('instructora', 'Ani'),
   se almacenará el par key-parametro en un bucket específico 
   (determinado al hashear la key)
*/
function HashTable(){
    this.buckets = [];
    this.numeroDeBuckets = 35
}
HashTable.prototype.hash = function(clave){
    let contador = 0
    for(let i = 0; i < clave.length; i++){
        contador += clave.charCodeAt(clave)
    }
    return contador % this.numeroDeBuckets
}
HashTable.prototype.set = function(clave, valor){
    if(typeof clave  !== "string") return TypeError('Keys must be strings')
    let indice = this.hash(clave)
    if(this.array[indice]===undefined) {
    this.array[indice] = {[clave]: valor}}
    else { 
          this.array[indice][clave] = valor
    }
}
HashTable.prototype.get = function(clave){
    let indice = this.hash(clave);
    if(this.array[indice][clave] === undefined) return undefined
    return this.array[indice][clave]    
    } 
HashTable.prototype.haskey = function(clave){
    let indice = this.hash(clave)
    if(this.array[indice][clave]) return true
    else return false
}


/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su parametro 
  (tener en cuenta el caso particular de una lista de un solo nodo
     y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, 
  con una particularidad: el parámetro puede ser un parametro o un callback.
  
  En el primer caso, buscamos un nodo cuyo parametro coincida con lo buscado;
   en el segundo, buscamos un nodo cuyo parametro, al ser pasado como 
   parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo parametro sea 3;
  search(isEven), donde isEven es una función que retorna true
   cuando recibe por parámetro un número par, busca un nodo cuyo
    parametro sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe
   retornar null.
*/
function LinkedList(){
    this.head = null
}
function Node(value){
    this.value = value
    this.next = null
}
LinkedList.prototype.add = function(){
 let nuevoNodo = new Node(value);
 current = this.head
if(current === null){
    this.head = nuevoNodo
}
else {
     while(current.next !== null){
        current = current.next
     }
     current.next = nuevoNodo
}
return nuevoNodo

}
LinkedList.prototype.remove = function(){
    current = this.head
   if(current === null) return null
   if(current.next === null){
    let valorEliminado = current.value 
    this.head = null
    return valorEliminado
   }

   while(current.next.next !== null){
    current = current.next
   }
   let valorEliminado = current.next.value
   current.next = null 
   return valorEliminado
}
LinkedList.prototype.search = function(parametro){
    let current = this.head;
    if(curret === null) return false
    if( typeof parametro=== "function"){
        while(current){
            if(parametro(current.value)) return current.value
           else return current.next 
        }
        return null
    } else { 
         while(current){
             if(parametro === current.value) return parametro
             else return current.next
        }
        return null
    }
   
}


/*-------------------------------------------------/*/
/*LAS ESTRUCTURA DEDATOS SON OBJETOS: 
step 1: creo un objeto:
ej crea una lista enlazada y un metodo que agrege, otro que remueva el primero
como ya se que la lista va ser un objeto que tiene un head, ya se que va ser un objeto.
luego se que a esa lista enlazada se le van a insertar nodos, que son objetos. el nodo va tener
un nodo con su valor  y un next. 

step 2:harcodeo usando dot.notation, para poder ver cuales son los pasos, que pretende eltest
. primero tengo que saber si la listaenlazada listaenlazada.head === null { listanlaz
    .head = nodo1} y así creamos el primer nodo. 
    
    como agrego el proximo nodo? pregunto si es null, si el null ya no existe. entonces
    deberia ver si listaenlazada.head.next === null, ahi le pido que agrege  listaenlazada
    .head.next = nodo2  y así agrego el segundo nodo. 
    
    esto tomaría mucho codigo, entonces tomamos una referencia (let current) que me ayude
    como referencia. current siempre va empesa siendo . head y desde ahi va ir recorriendo
     ej: while(current){current = current.next} esto va avanzar por los next
      hasta que de null*/


function LinkedList() {
    this.head = null //esto va ser un objeto.
    this._lengt = 0 //esto es un contador de nodos.
}
function Node(value){
    this.value = value;
    this.next = null
}
const list = new LinkedList()
console.log(list)

LinkedList.prototype.add = function(valor){
    let nuevoNodo = new Node(value);
    current = this.head
   if(current === null){
       this.head = nuevoNodo
   }
   else {
        while(current.next !== null){
           current = current.next
        }
        current.next = nuevoNodo
   }
   return nuevoNodo
}
LinkedList.prototype.remove = function(){
    let current = this.head
    if(current === null) return null
    else if( current.next === null) {
        this.head = null
         this._length-- }
         else{
            while(current.next.next !== null){
                current = current.next
            }

            let valoreliminado = current.next.value
           
            current.next = null
            this._lengt--
            return valoreliminado
           
         }
        

        }
LinkedList.prototype.search = function(parametro){
    let current = this.head
    if(current = null) return null
    if(typeof parametro === "function"){
        while(current){
            if(parametro(curent.value) === parametro){
                return current.value
            }
            current = current.next
        }
    }
    while(current){
        if (current.value === parametro) return current.value
        current = current.next 
    }
    return null

}

/*una manaera facil es ir hardcodeando, 
 const list = new LinkedList()*/
