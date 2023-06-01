
const arr1 = [1,2,3,4,5,9]
const arr2 = [4,3,7,6,4,1,0]
for(let i = 0; i < arr1.length; i++){
    for(let j = 0; i< arr2.length; i++){
        console.log(arr1 + arr2)
    }
}
let sumar = arr1.map(elem => elem{arr1 + arr2})
console.log(sumar)

/* O(n * m) esto significa big o notation. esto hace aproximar el tiempo que tardará la resolucion
de la funcion del algortimo. n va hacer el recorrido cierto numero de veces. el for que está
arriba va a recorrerse, por ende nos dirá cuantas veces lo recorrido. el tema e que
tenemos 2 variables, arr1 y arr2, enton ces n es la cantidad deveces que recorre arr1
  y m es j que recorre cierta cantidad tambien. una vez uqe nos da el numero, O(n * m) multiplica.
  arr1 tiene 6 elementos, osea que se recorre 6 veces, arr2 tiene 7 pasos, 6 x 7 nos da 42 pasos
  para resolver. */