// Ejercicos de Eventos del DOM

// Ejercicio 1
export const listarEventos = (itemsLista) => {
  itemsLista.forEach((item) => {
    item.addEventListener("click", () => {
      console.log(item.textContent);
    });
  });
};

// Ejercicio 2

export const disableCamp = (txtCamp) => {
  txtCamp.disabled = true;
};
export const enableCamp = (txtCamp) => {
  txtCamp.disabled = false;
};
