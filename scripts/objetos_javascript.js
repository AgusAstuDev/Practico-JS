// Ejercicos de Objetos en JavaScript

// Ejercicio 1
export let persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Madrid",
  cambiarCiudad: function (nuevaCiudad) {
    this.ciudad = nuevaCiudad;
  },
};

// Ejercicio 2
export let libro = {
  title: "Don Quijote de la Mancha",
  autor: "Miguel de Cervantes",
  year: 1615,
  isOld: function () {
    let fechaActual = new Date();
    let yearActual = fechaActual.getFullYear();
    let oldBookValue = yearActual - this.year;
    return oldBookValue > 10;
  },
};
