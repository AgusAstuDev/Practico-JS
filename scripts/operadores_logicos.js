// Ejercicos de Operadores logicos

// Ejercicio 1
export const valorMayor = (a, b) => {
  // Script de cual de los valores es mayor
  return a > b ? a : b;
};

// Ejercicio 2
export const promptNumero = prompt(
  "Ingresa un número y te diré si es par o impar"
);

export const paridad = (a) => {
  return a % 2 === 0 ? "es par" : "es impar";
};
