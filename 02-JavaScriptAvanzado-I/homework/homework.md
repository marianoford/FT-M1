# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor. // la diferencia esta en el alcance que recibe cuando se asigna var, en el caso de que no se asigne var el operador buscará alguna variable con ese nombre en el orden superior y en el caso de que no lo encuentre creara una a nivel global siempre y cuando no exista en el ambito actual o superior 

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); // aca x valdría 10 porque está en el global
   console.log(a); // aca a valdría 8 por el mismo motivo 
   var f = function (a, b, c) {
      b = a;
      console.log(b); //aca nos daría 8
      b = c; 
      var x = 5;
   };
   f(a, b, c); // a valdría 5, b vadría 11 
   console.log(b); // retornaría 9 -> se crea por la funcion c
};
c(8, 9, 11);
console.log(b); // daría 10 -> del global
console.log(x); // x valdría 1 
```

```javascript
console.log(bar); // bar no tiene valor asignado aún, mas allá que se asigna posteriormente ==> undefined   
console.log(baz); // lo mismo ocurre con baz => referenceError
foo(); // retornaría " hola!"--> la funcion si tiene hosting y está por encima de su llamado siempre. cuando ejecuta la funcion busca donde está y la ejecuta. no importa donde la escribi, se la llama y se va ejecutarse siempre. porque tiene hosting 
function foo() {
   console.log('Hola!'); 
}
var bar = 1; //// --> esta variable asciende pero no se define, porque se despide posteriormente. si pondría let se rompe el codigo, no asciende, no hace hosting
baz = 2; // --> esta tambien sube pero da error, no hace hosting
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); // retornaría franco porque ambas variables var estan en el global y la segunda sobreescribe a la primera 
```

```javascript
var instructor = 'Tony';
console.log(instructor);//esto devolvería tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); // esto devolvería franco 
   }
})();
console.log(instructor); // en este caso devolvería Tony porque esta asignado en el global, franco está anidado en una funcion. 
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';

if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); // esto devolvería the flash 
   console.log(pm); // esto devolvería reverse flash
}
console.log(instructor); // esto devolvería the flash 
console.log(pm); // esto devolvería Franco 
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" =  "2"
"2" * "3" = "6"
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 =  2
"4px" - 2 = NaN
7 / 0 = Infinity
{}[0] = [0]
parseInt("09") = 9
5 && 2 = 2
2 && 5 = 5
5 || 0 = 5
0 || 5 = 5 
[3]+[3]-[10] =   // pero es 23, los dos 3 se unen y  se resta 10
3>2 = true >1 = false 
[] == ![] = true 
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // daría undefined
   console.log(foo()); // daría 2 

   var a = 1;
   function foo() {
      return 2;
   }
}

test(); 
//corrijo, el console.log de a no está definido al momento de invocar el console.log, por ende el resultado de salida sería undefined y 2.
                                                      
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false); // en este caso el valor de salida sería snack, primero porque está definido en el global, y segundo porque en la funcion getfood se invoca el parametro food, mediante un if. está diciendo que si food coincide con la variable = "friskies" retorne ese valor en el caso de que sea TRUE. pero como al invocar la funccion se determina que la misma es (false), y en la funcion no se asignó una alternativa como else o else if, por defecto asigna la variable del global 

// correccion. el valor de retorno nos da undefined por lo ultimo que dije respecto a que no se ha establecido una alternativa en caso de que nos diera false. si a la funcion le pasamos por parametro "true" , nos devuelve "friskies"
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); // en este caso nos devolvería "Aurelio de rosa", porque mediante el console.log se está accediendo a la propiedad obj, a su vez se está accediendo a prop, en esta propiedad se a asignado la  variable fullname : "aurelio de rosa". que si bien fullname ya se ha definido a nivel global, dentro de esta funcion se ha reasignado su valor, teniendo validez solo dentro del metodo GetFullname.  

var test = obj.prop.getFullname; ---> le falta () entonces va dar undefined 

console.log(test()); // en este caso se le está asignando a la variable "test" el valor de "aurelio de la rosa", porque esta usando un metodo para acceder a la funcion que expliqué en el ejemplo anterior. la misma tiene definida un metodo para que retorne fullname = "aurelio de la rosa" 
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing();// en consola primero se mostraría  1, porque no tiene un setTimeout asignado, en segundo termino se monstraría 4, porque tampoco tiene un setTime asignado, luego se mostraría 3, porque tiene un setTime asignado a 0 segundos y por ultimo se mostraría 2, porque tiene un setTime asignado a 1 segundo. 
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
