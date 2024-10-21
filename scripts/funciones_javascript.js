// Ejercicos de Funciones de JavaScript

// Ejercicio 1
export const esPar = (a) => {
  return a % 2 === 0;
};

// Ejercicio 2
export const convertirCelsiusAFahrenheit = (celsius) => {
  const localCelsius = celsius;
  const farenheit = celsius * 1.8 + 32;

  return `${localCelsius}ºC son equivalentes a ${farenheit}ºF`;
};
