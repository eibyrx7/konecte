//animacion marcos
document.addEventListener("DOMContentLoaded", function () {
    var images = ["./resources/imagen1.jpg", "./resources/imagen2.jpg", "./resources/imagen3.jpg"]; // Lista de imágenes
    var currentIndex = 0;
    var container = document.getElementById("background-container");

    function changeBackground() {
        container.style.backgroundImage = "url('" + images[currentIndex] + "')";
        currentIndex = (currentIndex + 1) % images.length; // Avanza al siguiente índice, volviendo al principio si alcanza el final
    }

    // Cambia la imagen de fondo cada 3 segundos (3000 milisegundos)
    setInterval(changeBackground, 5000);
});