'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var factores = []
  for (var i = 2; i <= num / 2; i++) {
    while (num % i === 0) {
      factores.push(i);
      num = num / i;
    }}
    if (num > 1) {
      factores.push(num);
    }
  
    return factores;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //         i
  //array = [2,7,5,3,6,4,8]
  //         j 
  //
  
  for (let i = 0; i < array.length; i++) {
    /*este for sólo va controlar las veces q se va ejecutar el bucle
    */
    for(let j = 0; j < array.length; j++){
      
       if(array[j] > array[j + 1]){
        let aux = array[j] // --> 8
         array[j] = array[j + 1] // --> 7
         array[j + 1] = aux //--> 8
          
       }
    }
   
    
  }
  return array

}



function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  // aux             * |
  //array = [1,2,4,6,8,9]
  //                   i
//                   j
 
  //indices =
  for(let i = 1; i < array.length; i++){
    let j = i - 1 //ubicacion
    let aux = array[i] // 

    while(j >= 0 && aux < array[j]){ // aux 6 ||  arr j 8
        array[j + 1] = array[j]; //  6
        j--
    }    

    array[j + 1] = aux; 
    }
    return array
  }



function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i < array.length; i++){
    let min = i; // --> posicion
    for (let j = i + 1; j < array.length; j++) {
       if(array[j] < array[min]){// arr j = | min = 
        min = j  // min = 
       }
    } 
    if(i !== min){
       let aux = array[i] //  = 
       array[i] = array[min] // i = 
       array[min] = aux  //
    }
  }
  return array

 
  /*         
              j   
  array    [2,1,4,6,3,5]
            i
  min       x
  */

  /*
  let arr = []
  while(array.lenght > 0){
    //array.splice(array.indexOf(minimo),1)
  } */

}

let arr = [2,5,1,3,6]
console.log(selectionSort(arr)); 
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
