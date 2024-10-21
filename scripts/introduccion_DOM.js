// Ejercicos de Introducción al DOM

// Ejercicio 1
export const cambiarColorParrafos = () => {
  const parrafos = document.querySelectorAll("p");

  parrafos.forEach((parrafo) => {
    parrafo.style.color = "blue";
  });
};

// Ejercicio 2
export const mostrarAlerta = () => {
  const valorTexto = document.getElementById("inputTexto").value;
  alert("Has ingresado: " + valorTexto);
};
