'use strict';

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
function LinkedList() {
  this.head = null; 
}

function Node(value) {
  this.value = value;
  this.next = null 

}
LinkedList.prototype.add= function (value) {
   let nodo = new Node(value);
   let current = this.head
   
   if(current === null){
       this.head = nodo    //1 --- > un ciclo cuando no hay nodos 
   }
   else {
   while(current.next !== null){
       current = current.next 
   }                          //2--> otro ciclo cuando hay nodos ya creados. 
  
  
   current.next = nodo // 3---> en caso de que next = null
   }
   return nodo
}
LinkedList.prototype.remove = function() {
 let current = this.head;
 /*aca se esta parando en el head, el current es  un señador*/ 
 if(current === null) return null 
 /*aca esta diciendo que si el head no tiene un valor asignado, retorne null */

 if(current.next === null){  //a)
   let valorEliminado = current.value //b)
   this.head = null  //c)
   return valorEliminado  //d)
   
   /*a ) ns esta diciendo que si currents.next === null, esto quiere decir que nos encontramos
   parados en el primer nodo, que solo tiene valor, pero no tiene next. 
    b) la variable valor eliminado es igual al valor del current. el nodo solo tiene valor
     no tiene next
     c) esto está convirtiendo el valor del head a null, que hace que el primer nodo se
      borre automaticamente
      d) retorna el valor que se va eliminar, que era el valor dentro del nodo.*/ 
          
}
 
 while(current.next.next !== null){ //a)
    current = current.next;    //b)
    /*a) lo que esta haciendo esto es ubicar al current .next, al asignarse dos veces
     se está adelantando un next. mas, de manera que si pensamos que estamos buscando
      eliminar al ultimo, current.next(sería el anteultimo) y current.next.next(seria el ultimo)
      siempre que no sea null, va ir saltando en cada vuelta que de el bucle hasta que llegue
      a encontrar el ultimo next. que se = null
      b)  al decir que current = current.next dice que mientras que .next !== salte 
      al siguiente nodo, y así sucesivamente hasta encontrar = null, en ese momento
      el bucle se va detener.*/
 }
 /*a esta altura, el codigo ya descarto listas vacías, y de 1 solo nodo. y nos encontramos
 parados en el ultimo nodo de la lista*/

 let valorEliminado = current.next.value
 current.next = null
 /*aca asignamos el valor null a curren.next, lo que lo elimina.*/
 /*esto no retornaría null??*/
 
 
 /*por ultimo decimo que valor eliminado es = current.next y lo retorna.*/
  

 return valorEliminado

}

LinkedList.prototype.search = function(parametro){
   let current = this.head;
    // si o si tengo que tener current, si no no estoy parado en ningun lado
   
   if(current === null) return false
   // tambien debe existir algun current, si no no estaríamos parados en ningun lado

   if(typeof parametro === "function"){
   // el typeof me esta determinando que en caso de que el parametro sea una funcion debe
   //hacer lo siguiente:
    while(current){      
      if(parametro(current.value)) return current.value
      else current = current.next
   }

   /* esto me está diciendo que si el valor del nodo es una funcion, que retorne el valor
    del nodo. y en caso contrario, que salte al siguiente nodo(en caso de que exista)*/
   return null
      
} else { //este else se aplica en el caso de que current.parametro no sea una funcion.
      while(current){
      if (current.value === parametro) return parametro
      else current = current.next
    }
    /*esto esta diciendo que si el valor de current es igual al valor que pasamos por parametro
    nos retorne ese valor que concide con el del parametro
    y en caso contrario, current = current.next le esta diciendo que pase al siguiente nodo
    en caso de que exista. si no existe, simplemente retornará null.*/
    return null  

}
}
let nuevaLista = new LinkedList()

nuevaLista.add("nodo 1")
nuevaLista.add("nodo 2")
console.log(nuevaLista.remove())
console.log(nuevaLista.search("nodo 2"))

console.log(nuevaLista)


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
function HashTable() {
  this.array = [];
   this.numBuckets = 35
}
/* primero creamos la funcion padre hashTable, con dos parametros
primero un array, donde vamos a introducir los datos y segundo
un numbuckets que son los lugares donde vamos a poner los datos.*/

HashTable.prototype.hash = function(key){ 
      let hash = 0
/* primero defino un contador hash que va empezar en cero
en el se van almacenar los datos que saldrán del bucle*/
   for(let i = 0; i < key.length; i++){
      hash = hash + key.charCodeAt(i)
   }
/*este bucle toma el metodo charcodeAt, que se encarga de convertir
 los datos que pasamos por parametro bajo el diccionario ascii. 
 ej */

   return hash % this.numBuckets;
   /*por ultimo hago un modulo del codigo obtenido. como yo solo tengo
   35 lugares, cada vez que cree un hash tengo que % por 35
   para que lo reparta dentro de uno de esos lugares.*/
}


HashTable.prototype.set = function(key,value){
   /*este metodo sirve para asignar la clave valor*/
   if(typeof key !== "string") throw TypeError("Keys must be strings")
/*esto nos está diciendo que en caso de que key no sea una string
que nos devuelva un error*/
   let index = this.hash(key)
/*este led, crea un indice, ese indice lo saca de la funcion de arriba
aplica el metodo hash, crea un numero, y ese numero se toma como indice*/
   if(this.array[index] === undefined){ 
       this.array[index] = {[key]: value}
   }
/*aca decimos que en caso de que si en el slot del indice no hay
nada definido(undefined), creemos un nuevo objeto, que va tener
como clave lo que le pasemos por parametro, y como valor lo mismo 
que pasemos por parametro */
   else this.array[index][key] = value 
/* y en el caso contrario, suponiendo que ese slot ya tenga un indice
creado, no vamos a crear unonuevo, sino quevamos a asignar solo el valor
de manera que vamos a tener dos valores con una misma clave*/

} 

HashTable.prototype.get = function(key) {
   let index = this.hash(key);
   /* nuevamente, tenemos un indice creado a partir del numero que nosda
   el metodo hash */
   if(this.array[index]===undefined) return undefined
   /*aca decimos que en caso de que en el indice no existan ninbun objeto
   vamos a devolver undefined */
   return this.array[index][key]
   /*pero en caso de existir, queremos que nos devuelva ese valor */
}

HashTable.prototype.hasKey = function(key){
var index = this.hash(key)

if(this.array[index] ===undefined) return undefined
if(this.array[index][key]) return true
else return false 

/*este metodo esm uy aprecido al anterior, nada mas que en vez de devolvernos-
su valor, nos va devolver true o false 
*/
}





// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
