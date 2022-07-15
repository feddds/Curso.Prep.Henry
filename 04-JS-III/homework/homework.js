// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  // nombre del array[0]
console.log(array[0]);

}
devolverPrimerElemento([0, 1, 2])


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
console.log(array.length);
console.log(array[array.length-1]);

}
devolverUltimoElemento(['fabi', 49, 'di dio'])


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  console.log(array.length)
}
obtenerLargoDelArray([1,2,3], null, 'fabi');

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
var array0mas1 = array[0] + 1;
var array1mas1 = array[1] + 1;
var array2mas1 = array[2] + 1;
console.log(array0mas1, array1mas1, array2mas1);
}
incrementarPorUno([1,12,35]);


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  i=0;
  while (i<array.length){
    console.log(array[i]+1);
    i++;
  }
}
incrementarPorUno([1,12,35]);



function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
array.push(elemento);
console.log(array);
}
agregarItemAlFinalDelArray([1,null,'soy'], 'fabi')


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
console.log(array);
array.unshift(elemento);
console.log(array);

}
agregarItemAlComienzoDelArray([2579, 'gllen'], 'gutierrez');

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

console.log(palabras[1] + ' ' + palabras[0] + ' ' + palabras[2]);
}

dePalabrasAFrase(['Hola', 'Amigos', 'Como están!'])


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  i=0;
  while (i<array.length){
    //no hace falta hacer if y else siempre, con un if solo alcanza para evaluar.
    if (array[i] === elemento){
      return true
    }
    i++
    } 
    // el return false puede ir luego de iterar y no encontrar un elemento igual
    return false; 
  }
arrayContiene([1, true, undefined, 'lerolero'], 'lerolero')


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
//console.log(numeros[0]+numeros[1]+numeros[2]);
var i=0;
var suma=0;
while (i<numeros.length){
  suma=suma + numeros[i];
  i++;
} console.log(suma)
}
agregarNumeros([1,2,7])


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var i=0;
  var suma=0;
  
  while (i < resultadosTest.length) {
    //console.log(resultadosTest[i]);
    suma =  suma + resultadosTest[i];
    i++;
    } console.log(suma/i);
      
}
promedioResultadosTest([2,5,8])



function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
if (numeros[0] > numeros[1] && numeros[0] > numeros[2]) {
  console.log("soy el mayor", numeros[0])
} else if (numeros[1] > numeros[2]) {
  console.log("soy el mayor", numeros[1])
} else {
  console.log("soy el mayor", numeros[2])
}
  //console.log(numeros[0])
}
numeroMasGrande([10,76,19]);


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
if ( arguments.length === 0) {
  console.log("0");
  } else if (arguments.length === 1) {
    console.log(arguments[0]);
  } else {
  console.log(arguments[0]*arguments[1])
}
}
multiplicarArgumentos(9,2000000);


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

var cant=0;
var i=0;

while (i<arreglo.length){

  if (arreglo[i] > 18) {
    cant =  cant + 1;

  }
    i++;

} console.log(cant);

}
cuentoElementos([23,5,56,4,17,18,119])



function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
var semana = [1,2,3,4,5,6,7];
// el pedo fue que los arreglos arrancan de 0, y por eso me equivocaba.
if (numeroDeDia === semana[0] || numeroDeDia === semana[6]) {
  console.log(numeroDeDia)
  console.log("Es findeee !!! ")

} else {
  console.log(numeroDeDia)
  console.log("Es laboral :-(")
}
} 
diaDeLaSemana(1)


function diaDeLaSemana(nombreDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
var semana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
// el pedo fue que los arreglos arrancan de 0, y por eso me equivocaba.
if (nombreDeDia === semana[0] || nombreDeDia === semana[6]) {
  console.log(nombreDeDia)
  console.log("Es findeee !!! ")

} else {
  console.log(nombreDeDia)
  console.log("Es laboral :-( ")
}
} 
diaDeLaSemana("Jueves");



function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

var n_string0 = String(n)[0];
var n_numer0 = Number(n_string0)

/*console.log(n_string0)
console.log(typeof n_string0)


console.log(n_numer0);
console.log(typeof n_numer0)*/

if (n_numer0 === 9) {
  return true;
} else {
  return false;
}

}
empiezaConNueve(900);

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  // for (var i =0 ; i < arreglo.length - 1; i++) {
  //   if(arreglo[i] !== arreglo[i+1]){
  //     console.log("Falso")
  //     return false
  //   }
  // }
  // console.log("Verdadero")
  // return true
  var i=0;

  while (i < arreglo.length -1) {
//el length-1 es para que la iteracion pare antes ya que si no lo ponemos va a buscar un valor hacia adelante que 
//no existe.

    if (arreglo[i] !== arreglo[i+1]) {
      //console.log("falso");
      return false;
      } i++;

  } //console.log("verdadero")
    return true;
//el poder de los return, ellos cortan la ejecución del bucle y por lo tanto sale un resultado de la función. 
// siempre usar return.
} 
todosIguales([1,1,1])



function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

// la iteración deber quedar solita !!!

var nuevoArray = [];

// el for itera solito y con el push va metiendo los meses que encuentra en el nuevo array con push
  for (var i=0; i<array.length; i++) {

    if (array[i] ==="Enero" || array[i] ==="Marzo" || array[i] === "Noviembre")  {
    nuevoArray.push(array[i]);
    }
  }
// si el nuevo array tiene menos de 3 meses, es decir que falta uno.
  if (nuevoArray.length < 3) {
    return "No se encontraron los meses pedidos."
  }
// sino estan los tres retorna el array !!!  
  else {
    return nuevoArray;
  }

}
mesesDelAño(['Enero','Febrero', 'Marzo','Julio']);



function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

var nuevo_array =[];

  // para recordar; la iteracion trabaja con solo un if evalua que evalua y va guardando
  // en un nuevo array con push.

  for (var i=0; i<array.length; i++) {

    if (array[i] > 100) {

      nuevo_array.push(array[i]);

    }

  }

  return nuevo_array;

}
mayorACien(['23','234','100', '99'])



function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

var nuevoArray =[];

for (var i=0; i<=100; i++) {

numero = numero + 2 ///aca acumulamos los resultados de la operación
console.log("iterador:",i, "/// acumulador: ", numero, ); //no hace falta usar i dentro del bucle, solo i nos asegura que se ejecute el bucle!!
nuevoArray.push(numero);

if (i===numero){
  console.log("Frena!")
  break;
}

} 
return nuevoArray;
}
breakStatement(5)


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

var nuevoArray = [];

        for (var i=0; i<=10; i++) {

        console.log("iterador:",i, "/// acumulador: ", numero);


                if (i===5) {

                //console.log("Continua porron", numero)
                continue;
                
                
                } else {
                
                numero = numero + 2;
                nuevoArray.push(numero);


        
        }
        
        }
return nuevoArray;
}
continueStatement(6);



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
