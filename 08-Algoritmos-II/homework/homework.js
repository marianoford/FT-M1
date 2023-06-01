'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
   //            p  
  //[9, 7, 3, 1, 5, 2, 6]
//      i

  if(array.length < 2) return array //corte
 let pivot = array[Math.floor(Math.random() * array.length)] //  2 => 5 
 /*Mathrandom me da un numero al azar entre 0 y 1, toma los decimales. y dsp
 lo multiplica por el array.length(7). esto siempre va dar un numero menor a la cantidad
 de elementos que tenemos, por eso lo mult x el leng del array */
 let equals = []
 console.log(pivot);
 let left = [];
 let right = [];
 // pivote = 3
 for(let i = 0; i < array.length; i++){
  if(array[i] !== pivot){
    /* la posicion de i es diferente al valor del pivote, de ser así, entra al if */
    if(array[i] < pivot) left.push(array[i])
    /* lo q hay en i es menor al pivote, si es menor lo pusheo en left*/
    else right.push(array[i])
   /*si el array es mayor que el pivote lo pusheo en a la derecha  */
  }
  else equals.push(array[i])
 }
 return quickSort(left).concat(equals).concat(quickSort(right))
}
let array = [1,4,5,8,9,2,6,3,7, -3, -2, 0,- 0.1]
console.log(quickSort(array));
/*
1- seleccionar un elemento cualquiera como pivot
2- recorrer los demas elementos, ubicandolos a ambos lados
3- mi for recorre los elementos,
4 unir, left, pivot, rigth
*/


function mergeSort(array) { // 
  //[9, 7, 3, 1, 5, 2, 6]
  // 0  1  2 | 3  4  5  6 --> math.floor 

  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if(array.length < 2) return array // en caso de que tenga 1 o ningun array. este s nuestro caso de corte
  //                                7
  const mitad = Math.floor(array.length / 2) //-> 3(dos array contenederos uno d 3 y otro de 4)
  /* 1ra vuelta = 3 
  ; 2da vuelta = 1 */
    
  let left = array.slice(0, mitad)
   //1ra vuelta; [9 , 7, 3]
   //segunda vuelta: [9]

  let right =array.slice(mitad) //
  //1ra vuelta : [1, 5, 2, 6] 
  // 2da vuelta :  [7, 3]
   // 3ra vuelta : []

  array = []
   //*esto pisa el array,stoy reciclandolo, ya no lo necesito

  left = mergeSort(left)
  right= mergeSort(right)

 while(left.length && right.length){
  if(left[0] < right[0]){
    array.push(left.shift())
  }
  else array.push(right.shift())
 }
 array = array.concat(left,right)
 return array  

  //okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
