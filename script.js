// script.js

// Obtener elementos del DOM
const modal = document.getElementById("myModal");
const modalBtn = document.getElementById("modalBtn");
const span = document.getElementsByClassName("close")[0];

// Abrir modal al hacer clic en el botón
modalBtn.onclick = function() {
  modal.style.display = "block";
}

// Cerrar modal al hacer clic en la 'x'
span.onclick = function() {
  modal.style.display = "none";
}

// Cerrar modal al hacer clic fuera del contenido del modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}