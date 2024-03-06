//expresiones regulares
let btnClear = document.getElementById("btnClear");   //Cambiar el nombre de los botones 
let btnValidar = document.getElementById("btnValidar");
let divAlert = document.getElementById("divAlert");
let txtnombre = document.getElementById("txtNombre");
let txtEmail = document.getElementById("txtEmail");
let txtTelefono = document.getElementById("txtTelefono");
let txtMensaje = document.getElementById("txtMensaje");
let bandera;

divAlert.style.display = "none";
btnValidar.addEventListener("click", function (event) {
    event.preventDefault();

    let regexNombre = /^[A-Za-z]{3,15}$/;
    let regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    let regexTelefono = /^(?!.*(\d)\1{3,})[1-9][0-9]{9}$/
    let regexMensaje = /^.{1,200}$/;

    let errorMessage = ""; // Acumulador de mensajes de error
    bandera = 0;


    if (!regexNombre.test(txtnombre.value)) {
        errorMessage += "El nombre tiene un formato incorrecto. </br>";
        bandera++;
    }

    if (!regexEmail.test(txtEmail.value)) {
        errorMessage += "El email tiene un formato incorrecto. </br>";
        bandera++;
    }

    if (!regexTelefono.test(txtTelefono.value)) {
        errorMessage += "El teléfono tiene un formato incorrecto. </br>";
        bandera++;
    }
    if (!regexMensaje.test(txtMensaje.value)) {
        errorMessage += "El mensaje tiene un formato incorrecto.";
        bandera++;
    }

    divAlert.innerHTML = errorMessage; // Asigna el mensaje acumulado
    if (errorMessage === "") {
        divAlert.style.display = "none";
    } else {
        divAlert.style.display = "block"; // Muestra la alerta si hay errores
        bandera++;
    }
    console.log(bandera)
    if (bandera <= 0){
        envioBandera (btnValidar)
    }
}); 

btnClear.addEventListener("click", function (event) {
    event.preventDefault();
    txtNombre.value = "";
    txtEmail.value = "";
    txtTelefono.value = "";
    txtMensaje.value = "";
    divAlert.style.display = "none";
});
