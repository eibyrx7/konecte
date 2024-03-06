//expresiones regulares
let btnValida = document.getElementById("btnValida");
let divAlert = document.getElementById("divAlert");
let txtDato = document.getElementById("txtDato");
let txtDomicilio = document.getElementById("txtDomicilio");
let txtTelefono = document.getElementById("txtTelefono");
let txtContrasena = document.getElementById("txtContrasena");
let txtContrasenaConfirma = document.getElementById("txtContrasenaConfirma");
let bandera;

divAlert.style.display = "none";
btnValida.addEventListener("click", function (event) {
    event.preventDefault();

    let regexNombre = /^[A-Za-z]{3,15}$/;
    let regexDomicilio = /^(?!.*(\d)\1{6,})[^\s]{1,10}$/;
    let regexTelefono = /^(?!.*(\d)\1{3,})[1-9][0-9]{9}$/;
    let regexContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/;
   

    let errorMessage = ""; // Acumulador de mensajes de error
    bandera = 0;


    if (!regexNombre.test(txtDato.value)) {
        errorMessage += "El nombre tiene un formato incorrecto. </br>";
        bandera++;
    }


    if (!regexTelefono.test(txtTelefono.value)) {
        errorMessage += "El teléfono tiene un formato incorrecto. </br>";
        bandera++;
    }

    if (!regexTelefono.test(txtTelefono.value)) {
        errorMessage += "El teléfono tiene un formato incorrecto. </br>";
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
        envioBandera (btnValida)
    }
}); 

btnClear.addEventListener("click", function (event) {
    event.preventDefault();
    txtDato.value = "";
    txtDomicilio.value = "";
    txtTelefono.value = "";
    txtContrasena.value = "";
    divAlert.style.display = "none";
});