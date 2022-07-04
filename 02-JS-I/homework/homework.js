// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'hola soy string';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 99;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  console.log(str);
  return str;
}
devolverString("hola, soy string");

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var suma = x + y;
  console.log(suma);
  return suma;
}
suma(6, 1);

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var resta = x - y;
  console.log(resta);
  return resta;
}
resta(9,-14);

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var multi = x * y;
  console.log(multi);
  return multi;

}
multiplica(5, 5);

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var dividir = x / y;
  return dividir;

}
divide(564,7);

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x===y){
    return true;
  } 
    return false;
}

sonIguales(8,8);

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  var largoStr1= str1.length;
  var largoStr2= str2.length;
  if (largoStr1===largoStr2) {
    return true;
  } 
    return false;
}
tienenMismaLongitud("hola", "capo");

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num < 90) {
    return true;

  }
    return false;
}
menosQueNoventa(50);

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num > 50){
    return true;
  }
    return false;
}
mayorQueCincuenta(50);


function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var restodiv = x % y;
  console.log(restodiv)
  return restodiv;  
}
obtenerResto(43, 2);



function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if(n % 2 == 0) {
    console.log(n % 2 == 0);
    return true;
  } console.log(n % 2 == 0);
    return false;
}
esPar(8);


function esImpar(n) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if (n % 2 !== 0){
    console.log(n % 2 !== 0);
    return true;
  } console.log(n % 2 !== 0);
    return false;
} 
esImpar(11);

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var alcuadrado = Math.pow(num, 2);
  console.log(alcuadrado)
  return alcuadrado;

}
elevarAlCuadrado(5);

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var alcubo = Math.pow(num, 3);
  console.log(alcubo);
  return alcubo;
}
elevarAlCubo(3);

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var num_al_exponent = Math.pow(num, exponent);
  console.log(num_al_exponent);
  return num_al_exponent;
  
}
elevar(2,8);

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var redondeo = Math.round(num);
  console.log(redondeo);
  return redondeo;
}
redondearNumero(5.5);


function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var redondeo_arriba = Math.ceil(num);
  console.log(redondeo_arriba);
  return redondeo_arriba;

}
redondearHaciaArriba(3.4);

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  var aleat = Math.random();
  console.log(aleat);
  return aleat;
}
numeroRandom();

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero> 0){
    console.log(numero, ": Es positivo");

  } else if (numero<0) {
    console.log(numero, ": Es negativo");
  }  else {
    console.log("False! soy 0!");
  }
}
esPositivo(-10);


function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  console.log(str + "!");

}
agregarSimboloExclamacion("hello word");

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  console.log(nombre, " ", apellido);
  
}
combinarNombres("Soy", "Fabián");

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  console.log("Hola, ", nombre);

}
obtenerSaludo("Fabián");

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  console.log("Area cuadrado: ", ancho * alto)
}
obtenerAreaRectangulo(4, 9);

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  console.log("Perimetro es: ", lado * 4);
}
retornarPerimetro(2);

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  console.log("Area del triángulo: ", (base * altura)/2)
}
areaDelTriangulo(3, 5);

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var dolar = euro * 1.2;
  console.log("Tu", euro, "Son:", dolar)
}
deEuroAdolar(1);

function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if (letra.length>1){
    console.log("Dato incorrecto")
  } else if (letra=="a") {
    console.log("Es vocal a");}
    else if (letra=="e") {
    console.log("Es vocal e");}
    else if (letra=="i") {
    console.log("Es vocal i");}    
    else if (letra=="o") {
    console.log("Es vocal o");} 
    else if (letra=="u") {
    console.log("Es vocal u");} 
    else {
    console.log("Dato incorrecto");
  }
}
esVocal("u");


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
