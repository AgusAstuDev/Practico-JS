// Script ejercicio 2 - Introduccion a JS
import { sumar } from "./scripts/introduccion_js";
// Script ejercicio 3 - Introduccion a JS
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
import { persona } from "./scripts/objetos_javascript";
// Script ejercicio 2 Objetos en JavaScript
import { libro } from "./scripts/objetos_javascript";
// Script ejercicio 1 Arrays
import { numeros } from "./scripts/arrays";
import { duplicateNumbers } from "./scripts/arrays";
// Script ejercicio 2 Arrays
import { bucleForArray } from "./scripts/arrays";

// Ejercicio 2 - Introduccion
let a = 5;
let b = 10;
let c = sumar(a, b);
console.log("Ejercicio 2 - Introduccion a JS, resultado suma= " + c);

// Ejercicio 3 - Introduccion
let nombre = promptNombre;
console.log("Ejercicio 3 - Introduccion a JS= " + `Hola, ${nombre}`);

// Ejercicio 1 - Operadores logicos
let aOL = 14;
let bOL = 7;
let cOL = valorMayor(aOL, bOL);
console.log("Ejercicio 1 - Operadores logicos= " + `El valor mayor es ${cOL}`);

// Ejercicio 2 - Operadores logicos
let verParidad = promptNumero;
console.log(
  "Ejercicio 2 - Operadores logicos= " +
    `Tu número ${verParidad} ${paridad(verParidad)}`
);

// Ejercicio 1 - Op. Asignacion y bucles
let numberToZero = 10;
console.log("Ejercicio 1 - Op. asignacion y bucles: ");
restToZero(numberToZero);

// Ejercicio 2 - Op. Asignacion y bucles
console.log("Ejercicio 2 - Op. asignacion y bucles: ");
let numberMoreCien = promptMoreCien();
console.log(numberMoreCien);

// Ejercicio 1 - Funciones de JavaScript
console.log("Ejercicio 1 - Funciones de JavaScript: ");
let valorPar = 2;
console.log(`El número ${valorPar} es par: ` + esPar(valorPar));
let valorImpar = 1;
console.log(`El número ${valorImpar} es par: ` + esPar(valorImpar));

// Ejercicio 2 - Funciones de JavaScript
console.log("Ejercicio 2 - Funciones de JavaScript: ");
let tempCelsius = 30;
console.log(convertirCelsiusAFahrenheit(tempCelsius));

// Ejecicio 1 - Objetos en JavaScript
console.log("Ejercicio 1 - Objetos en JavaScript: ");
let personaAna = persona;
console.log("Nombre: " + personaAna.nombre);
console.log("Edad: " + personaAna.edad);
console.log("Ciudad: " + personaAna.ciudad);
console.log("Luego de cambiar ciudad");
personaAna.cambiarCiudad("Barcelona");
console.log("Nombre: " + personaAna.nombre);
console.log("Edad: " + personaAna.edad);
console.log("Ciudad: " + personaAna.ciudad);

// Ejecicio 2 - Objetos en JavaScript
console.log("Ejercicio 2 - Objetos en JavaScript: ");
let libroQuijote = libro;
console.log("Nombre libro: " + libroQuijote.title);
console.log("Autor: " + libroQuijote.autor);
console.log("Año publicación: " + libroQuijote.year);
console.log(
  `El libro ${libroQuijote.title} es antiguo: ` + libroQuijote.isOld()
);

// Ejecicio 1 - Arrays
console.log("Ejercicio 1 - Arrays: ");
console.log("Números originales: " + numeros.join(","));
let numerosOriginales = numeros;
let numerosMultiplicados = duplicateNumbers(numerosOriginales);
console.log("Números duplicados: " + numerosMultiplicados.join(","));

// Ejecicio 2 - Arrays
console.log("Ejercicio 2 - Arrays: ");
let parToTwenty = [];
console.log(
  "Primeros 10 números pares: " + bucleForArray(parToTwenty).join(",")
);
