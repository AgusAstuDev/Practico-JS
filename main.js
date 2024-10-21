// Script ejercicio 2
import { sumar } from "./scripts/introduccion_js";
// Script ejercicio 3
import { promptNombre } from "./scripts/introduccion_js";
// Script ejercicio 1 Operadores logicos
import { valorMayor } from "./scripts/operadores_logicos";
// Scripts ejercicio 2 Operadores logicos
import { promptNumero } from "./scripts/operadores_logicos";
import { paridad } from "./scripts/operadores_logicos";
// Script ejercicio 1 Op. de asignacion y bucles
import { restToZero } from "./scripts/op_asignacion_bucles";
// Script ejercicio 2 Op. de asignacion y bucles
import { promptMoreCien } from "./scripts/op_asignacion_bucles";
// Script ejercicio 1 Funciones de JavaScript
import { esPar } from "./scripts/funciones_javascript";
// Script ejercicio 2 Funciones de JavaScript
import { convertirCelsiusAFahrenheit } from "./scripts/funciones_javascript";
// Script ejercicio 1 Objetos en JavaScript

// Ejercicio 2 - Introduccion
let a = 5;
let b = 10;
let c = sumar(a, b);
console.log("Ejercicio 2, resultado suma= " + c);

// Ejercicio 3 - Introduccion
let nombre = promptNombre;
console.log("Ejercicio 3= " + `Hola, ${nombre}`);

// Ejercicio 1 - Operadores logicos
let aOL = 14;
let bOL = 7;
let cOL = valorMayor(aOL, bOL);
console.log("Ejercicio 1 - Op. Lógicos= " + `El valor mayor es ${cOL}`);

// Ejercicio 2 - Operadores logicos
let verParidad = promptNumero;
console.log(
  "Ejercicio 2 - Op. Lógicos= " +
    `Tu número ${verParidad} ${paridad(verParidad)}`
);

// Ejercicio 1 - Op. Asignacion y bucles
let numberToZero = 10;
console.log("Ejercicio 1 - Op. asignacion y bucles: ");
restToZero(numberToZero);

// Ejercicio 2 - Op. Asignacion y bucles
let numberMoreCien = promptMoreCien();
console.log(numberMoreCien);

// Ejercicio 1 - Funciones de JavaScript
let valorPar = 2;
console.log(`El número ${valorPar} es par: ` + esPar(valorPar));
let valorImpar = 1;
console.log(`El número ${valorImpar} es par: ` + esPar(valorImpar));

// Ejercicio 2 - Funciones de JavaScript
let tempCelsius = 30;
console.log(convertirCelsiusAFahrenheit(tempCelsius));
