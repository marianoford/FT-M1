function BinarySearchtree(value){
    this.value = value; // valor de inicio
    this.left = null; // si es menor van a la izquierda
    this.rigth = null // si es mayor van a la derecha
}

BinarySearchtree.prototype.insert = function(value){
    if(value < this.value){ // si el valor es menor al valor base
        if(this.left === null){// si a la izquierda no hay nada
            this.left = new BinarySearchtree(value); //creamos un nuevo nodo
            return value
        }
        else{ 
             this.left.insert(value) //si existe un nodo,
                                     // le aplicamos a ese el metodo insert
        }
    }
    if(value > this.value){ //si el valor es mayor al caso base
        if(this.rigth === null){ // y a la derecha no hay nada
            this.rigth = new BinarySearchtree(value)// crea un nuevo nodo
           return vale
        }
        else this.rigth.insert(value)//en caso que exista nodo aplica un el 
                                     //metodo insert y crea un nuevo nodo 
    }
}
BinarySearchtree.prototype.size = function(){
    let contador = 1
    if(this.left) contador = contador + this.left.size()
    if(this.rigth) contador = contador + this.left.size()
    return contador
}

BinarySearchtree.prototype.depthFirstForEach = function(cb){
    this.left.depthFirstForEach(cb);
    this.rigth.depthFirstForEach(cb)
    cb(this.value) //la primera

    /*  cb(this.value)
    this.left.depthFirstForEach(cb);
    this.rigth.depthFirstForEach(cb)
    */ //la segunda.
}

/* primero ejecuto el metodo(cb), cuando ejecuto ese cb, es para el primer nodo, como siguiente paso
 tengo que agregar los dos nodos hijos, del nodo que esto ejecutando(guardo el nodo, no el objeto),
 guardo los ndoos en una queue(ej arr.push(this.left)) luego hago lo mismo con los
 nodos de la derecha. primer paso ejecuto la cb con el valor nodo actual.
 segundo guardo en un array los nodos de la izquierda y de la derecha. */


 function HashTable(){
    this.buckets = []
    this.numeroDeBuckets = 32
 }
 
 HashTable.prototype.hash= function (key) {
    let hash = 0
    for(let i = 0; i < key.length;i++)
    { hash += key.charCodeAt(i)}
    return hash % this.numeroDeBuckets 
 }
 
 HashTable.prototype.set = function(key,value){
  if(typeof key !== "string") throw TypeError("Keys must be strings")
  let index = hash(key) 
  if(this.buckets[index] === null){
     this.buckets[index] ={[key]: value}
  } 
   else this.buckets[index][key] = value
 
  return this
}

HashTable.prototype.get = function(valor){
 let index = hash(key)
 if(this.buckets[index] && this.buckets[index][key]){
     return this.buckets[index][key]
 }  return null
  
}
HashTable.prototype.haskey= function (valor){
    let index = hash(key)
    if(this.buckets[index] && this.buckets[index][key]){
        return true
    }  return false
     
   }