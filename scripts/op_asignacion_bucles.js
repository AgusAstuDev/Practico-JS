// Ejercicos operadores de asignacion y bucles

// Ejercicio 1
export const restToZero = (number) => {
  while (number >= 0) {
    console.log(number);
    number--;
  }
};

// Ejercicio 2
export const promptMoreCien = () => {
  let numberToValue;
  do {
    numberToValue = Number(prompt("Ingresa un número mayor a 100"));
  } while (numberToValue < 100);
  return "Ingresaste un número mayor a 100: " + numberToValue;
};
