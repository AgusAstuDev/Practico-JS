// Ejercicos de Locale

// Guardar en localStorage
export const saveEmail = (email) => {
  localStorage.setItem("savedEmail", email);
  displayEmail();
};

// Función para mostrar el correo almacenado
export const displayEmail = () => {
  const emailDisplay = document.getElementById("emailDisplay");
  const deleteBtn = document.getElementById("deleteBtn");
  const savedEmail = localStorage.getItem("savedEmail");

  if (savedEmail) {
    emailDisplay.textContent = `Correo guardado: ${savedEmail}`;
    emailDisplay.style.display = "block";
    deleteBtn.style.display = "inline-block";
  } else {
    emailDisplay.textContent = "";
    deleteBtn.style.display = "none";
  }
};

// Función para eliminar el correo de localStorage y del DOM
export const deleteEmail = () => {
  localStorage.removeItem("savedEmail");
  displayEmail();
};

// Fucniones de eventos
export const submitEvent = (evento) => {
  evento.preventDefault();
  const email = document.getElementById("email").value;
  saveEmail(email);
};
