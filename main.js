document.addEventListener("DOMContentLoaded", function() {
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

let btnValidar = document.getElementById("btnValidar");
let txtDato = document.getElementById("txtDato");
let divAlert = document.getElementById("divAlert");

let inputEmail = document.getElementById("inputEmail");

btnValidar.addEventListener("click", function(event){
    event.preventDefault();

    let regex = new RegExp("^[a-z0]{3,15}$");
    if (regex.test(txtDato.value)){
        divAlert.innerHTML="";
    } else {
        divAlert.innerHTML="El nombre tiene un formato incorrecto";
    }//else
    txtDato.focus();

    let regex1 = new RegExp ("^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$");
    if (regex1.test(inputEmail.value)){
        divAlert.innerHTML="";
    } else {
        divAlert.innerHTML = "Error en el campo de email"
    }

    
});

