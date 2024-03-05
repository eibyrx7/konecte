//expresiones regulares
let btnValidar = document.getElementById("btnValidar");
let divAlert = document.getElementById("divAlert");
let txtnombre = document.getElementById("txtNombre");
let txtDomicilio = document.getElementById("txtDomicilio");
let txtTelefono = document.getElementById("txtTelefono");
let txtEmail = document.getElementById("txtEmail");
let txtContrasena = document.getElementById("txtContrasena");
let txtContrasenaConfirma = document.getElementById("txtContrasenaConfirma");
let selectOficio = document.getElementById("selectOficio");
let inputFoto = document.getElementById("inputFoto");
let bandera;

divAlert.style.display = "none";
btnValidar.addEventListener("click", function (event) {
    event.preventDefault();

    let regexNombre = /^[A-Za-z]{3,15}$/;
    let regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    let regexTelefono = /^[1-9][0-9]*$/;
    let regexContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/ ;
    


    let errorMessage = ""; // Acumulador de mensajes de error
    bandera = 0;


    if (!regexNombre.test(txtnombre.value)) {
        errorMessage += "El nombre tiene un formato incorrecto. </br>";
        bandera++;
    }

    if (txtDomicilio.value.trim() === "") {
        errorMessage += "La Dirección tiene un formato incorrecto. </br>";
        bandera++;
    }

    if (!regexTelefono.test(txtTelefono.value)) {
        errorMessage += "El teléfono tiene un formato incorrecto. </br>";
        bandera++;
    }

    if (!regexEmail.test(txtEmail.value)) {
        errorMessage += "El email tiene un formato incorrecto. </br>";
        bandera++;
    }

    if (!regexContrasena.test(txtContrasena.value)) {
        errorMessage += "La contraseña tiene un formato incorrecto. </br>";
        bandera++;
    }

    if (txtContrasena.value !== txtContrasenaConfirma.value) {
        errorMessage += "Las contraseñas no coinciden. </br>";
        bandera++;
    }

    if (selectOficio.value === "Elegir") {
        errorMessage += "Debes seleccionar un oficio. </br>";
        bandera++;
    }
    
    //Validación de foto
    let fileExtension = inputFoto.value.split('.').pop().toLowerCase();
    if (!['png', 'jpg', 'jpeg'].includes(fileExtension)) {
        errorMessage += "El archivo debe ser en formato PNG o JPG. </br>";
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

