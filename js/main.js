Bars = document.querySelector(".bars");
Bars.onclick = function() {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};



document.addEventListener("DOMContentLoaded", function() {
  // Obtener el botón de cerrar sesión
  let btnCerrarSesion = document.getElementById("btnCerrarSesion");

  // Obtener el estado de sesión almacenado en localStorage
  let sessionStatus = localStorage.getItem("sessionStatus");

  // Mostrar u ocultar el botón de cerrar sesión según el estado de la sesión
  if (sessionStatus === "iniciada" && btnCerrarSesion) {
      btnCerrarSesion.style.display = "block";
  } else if (btnCerrarSesion) {
      btnCerrarSesion.style.display = "none";
  }
});
