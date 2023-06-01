function Tablacript() {
    this.array = [] // la tabla de encriptado
    this.numBuckets = 35 // los slots de la tabla 
}
                              
Tablacript.prototype.hash= function(key){ // esto me dice donde se va guardar la key
    let hash = 0
    for (let i = 0; i< key.length; i++) {
      hash += key.charCodeAt(i)      
     /*este metodo es de string toma el charcodeat(valor) 
     que esta en (i) que es una string. 
     si paso hash(abc), me va pasar que numeros ocupan estas letras
     en la tabla ASCII */

    }
    return hash % this.numBuckets 
    /*
    este resto va ser el numero/posicion de bucket donde has va estar 
    ubicado. si yo paso la clave 28 a la funcion hash.la contraseña
    será guardado en el slot 7
    */ 
   
Tablacript.prototype.set = funcion(key,value) { //esto guarda el key:value en la tabla
  if(typeof key !== "string") throw TypeError("Keys must be strings")// esto da un error cuando la key no es string
 /* aca estoy llamando a un error en caso de que key no sea una string*/
  let indice = this.hash(key)
  /*mediante la creacion de indice voy a poner el resultado de key
   en la tabla*/

   if(!this.array[index]){
    this.array[index] = {} 
   }
   /* este condicional se usa para evitar coliciones(dos nombres
     iguales dentro de los 28 slots),estoy diciendo que si no hay
      un array con ese indice, que cree un objeto.
      
      en el caso de que haya una propiedad con la misma key, va agregar
      el objeto con el mismo nombre dentro del mismo casillero 
      pero con hash diferentes. */
   

   this.array[index][key] = value; //2:28
   /* en esa posicion de array ahora me va dar un objeto, para crear
   una propiedad en el objeto cuando no se su nombre debo usar bracket
    y esa propieda que estoy creando se la asignamos a value  */ 




                                      
}
}