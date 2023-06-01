'use strict';

const { get } = require("@11ty/eleventy/src/TemplateCache");





// Closures

/* Ejercicio 1
La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando 
un valor numérico que empieza en 1 e incrementa con cada invocación.
EJEMPLO
const nuevoContador = counter()
nuevoContador()     // 1
nuevoContador()     // 2

const otroContador = counter()
otroContador()      // 1
otroContador()      // 2 */
function counter() { // creada funcion  que genera un contador 
  let contador = 1

   return function contar(){  // creo una funcion llamada contar que es quien va retornar couunter 
    return contador++
  }
   
   
}
let cont = counter()
console.log(cont())
console.log(cont())
console.log(cont())
console.log(cont())

/* Ejercicio 2
Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché
 para el callback 
que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que 
hace, de manera que, 
al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" 
sin tener que efectuar 
otra vez cálculos que ya se hicieron anteriormente.

- cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e
 invocar a cb con ese argumento; hecho eso, debe guardar el argumento junto con el resultado de la invocación
  (tip: usá un objeto donde cada propiedad sea el argumento, y su valor el resultado de la correspondiente invocación 
    a cb) de manera que, la próxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb,
     porque el resultado estará guardado en la "memoria caché".

  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) */

 // cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e
  //invocar a cb con ese argumento; hecho eso, debe guardar el argumento junto con el resultado de la invocación
   //(tip: usá un objeto donde cada propiedad sea el argumento, y su valor el resultado de la correspondiente invocación 
   //  a cb) de manera que, la próxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb,
    //  porque el resultado estará guardado en la "memoria caché". 
function cacheFunction(cb) {
  let memoriaCache = {};  // en esta clave-valor se va a almacenar la memoria cache 
     // el cb está multiplicando un numero x 2 en el hardcodeo
     return function(arg) {  //cuando nosotros pasamos argumento arg, este sera multip x 2
      if(memoriaCache.hasOwnProperty(arg)) return memoriaCache[arg]; // aca estoy diciendo que en el caso de que ese arg(numero multiplicado) ya se haya guardado en el objeto, que simplemente se devuelva, no que se agrege again
       memoriaCache[arg] = cb(arg); // en caso de que no esté agregado, estoy diciendo que la clave (arg) es igual al numero x 2, seria asi: clave: 4 - valor: 2
       return memoriaCache[arg]; // aqui estoy diciendo que me devuelva la clave con el valor multiplicado asignandolo al objeto vacio que est mas arriba.
     }
    

     
     
   
}


//----------------------------------------

// Bind

var instructor = {
   nombre: 'Franco',
   edad: 25,
};

var alumno = {
   nombre: 'Juan',
   curso: 'FullStack',
};

function getNombre() {
  return this.nombre;}


/*
  Ejercicio 3
  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)
  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
*/

let getNombreInstructor = getNombre.bind(instructor);
console.log(getNombreInstructor())

let getNombreAlumno = getNombre.bind(alumno);
console.log(getNombreAlumno())
/*
  Ejercicio 4
  Sin modificar la función crearCadena, 
  usar bind para guardar, en las tres variables
   declaradas a continuación, tres funciones que
    retornen una cadena (string) y el delimitador
    especificado (asteriscos, guiones, y guiones bajos,
     respectivamente). Las funciones obtenidas deberían 
    recibir solamente un argumento - la cadena de texto -
     ya que los otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
    return delimitadorIzquierda + cadena + delimitadorDerecha;
}
//a travezde bind se puede pasar mas de un parametro(como apply, no va ser un array, solo le pasamos parametros)
//el primer parametro que se pasa en bind siempre es a donde quiero que mire el "this."
//en el ejercicio no estoy usando this. entonces puedo poner cualquier cosa como primer parametro(null,undefined,this,nan,"")

let textoAsteriscos = crearCadena.bind(this, "*", "*");
let textoGuiones = crearCadena.bind(NaN, "-", "-");
let textoUnderscore = crearCadena.bind("corcho", "_", "_");

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   counter,
   cacheFunction,
   getNombreInstructor,
   getNombreAlumno,
   textoAsteriscos,
   textoGuiones,
   textoUnderscore,
};
