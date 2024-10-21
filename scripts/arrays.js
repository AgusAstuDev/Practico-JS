// Ejercicos de Arrays

// Ejercicio 1
export let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const duplicateNumbers = (arrayNumbers) => {
  const duplicatedArray = [];

  arrayNumbers.forEach((element) => {
    const elementx2 = element * 2;
    duplicatedArray.push(elementx2);
  });

  return duplicatedArray;
};

// Ejercicio 2
export const bucleForArray = (arrayTwentyPar) => {
  let localArray = [];
  for (let index = 1; index <= 20; index++) {
    let numberCount = 0 + index;
    if (numberCount % 2 === 0) {
      localArray.push(numberCount);
    }
  }
  return localArray;
};
