// Variables globales para elementos del DOM
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

// Ocultar el div de alerta al principio
divAlert.style.display = "none";

// Agregar evento de click al botón de validación
btnValidar.addEventListener("click", function (event) {
    event.preventDefault();

    // Expresiones regulares
    let regexNombre = /^[A-Za-z]{3,15}$/;
    let regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    let regexTelefono = /^[1-9][0-9]*$/;
    let regexContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/;

    // Acumulador de mensajes de error
    let errorMessage = "";
    let bandera = 0;

    // Validaciones individuales
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

    // Validación de foto
    let fileExtension = inputFoto.value.split('.').pop().toLowerCase();
    if (!['png', 'jpg', 'jpeg'].includes(fileExtension)) {
        errorMessage += "El archivo debe ser en formato PNG o JPG. </br>";
        bandera++;
    }

    // Mostrar mensajes de error
    divAlert.innerHTML = errorMessage;
    if (errorMessage === "") {
        divAlert.style.display = "none";
    } else {
        divAlert.style.display = "block";
        bandera++;
    }

    // Si no hay errores, guardar el usuario
    if (bandera <= 0) {
        let usuario = {
            nombre: `${txtnombre.value}`,
            domicilio: `${txtDomicilio.value}`,
            telefono: `${txtTelefono.value}`,
            email: `${txtEmail.value}`,
            contrasena: `${txtContrasena.value}`,
            oficio: `${selectOficio.value}`,
        };

        // Obtener la foto como base64 y agregarla al usuario
        let file = inputFoto.files[0];
        let reader = new FileReader();
        reader.onload = function(event) {
            usuario.foto = `${event.target.result}`;
            guardarUsuarioEnLocalStorage(usuario);
        };
        reader.readAsDataURL(file);
    }
});

// Función para guardar el usuario en el almacenamiento local
function guardarUsuarioEnLocalStorage(usuario) {
    let usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuariosGuardados.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));
}
