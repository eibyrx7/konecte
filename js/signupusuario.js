document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al formulario y campos de entrada
    let btnValidar = document.getElementById("btnValidar");
    let txtNombre = document.getElementById("txtNombre");
    let txtTelefono = document.getElementById("txtTelefono");
    let txtEmail = document.getElementById("txtEmail");
    let txtContrasena = document.getElementById("txtContrasena");
    let divAlert = document.getElementById("divAlert");

    // Ocultar el div de alerta al principio
    if (divAlert) {
        divAlert.style.display = "none";
    }

    // Función para validar el inicio de sesión
    function iniciarSesion(nombre, telefono, email, password) {
        // Expresiones regulares
        let regexNombre = /^[A-Za-z\s]+$/;
        let regexTelefono = /^\d{10}$/;
        let regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

        // Validar el formato del nombre
        if (!regexNombre.test(nombre)) {
            mostrarAlerta("El nombre tiene un formato incorrecto.", "error");
            return;
        }

        // Validar el formato del teléfono
        if (!regexTelefono.test(telefono)) {
            mostrarAlerta("El teléfono tiene un formato incorrecto.", "error");
            return;
        }

        // Validar el formato del correo electrónico
        if (!regexEmail.test(email)) {
            mostrarAlerta("El correo electrónico tiene un formato incorrecto.", "error");
            return;
        }

        // Validar que la contraseña tenga al menos 6 caracteres
        if (password.length < 6) {
            mostrarAlerta("La contraseña debe tener al menos 6 caracteres.", "error");
            return;
        }

        // Guardar datos de inicio de sesión en localStorage
        let usuario = {
            nombre: nombre,
            telefono: telefono,
            email: email,
            contrasena: password
        };
        guardarDatosInicioSesion(usuario);

        // Mostrar mensaje de éxito
        mostrarAlerta("Inicio de sesión exitoso", "exito");

        // Redirigir al usuario a otra página, por ejemplo:
        window.location.href = 'index.html';
    }

    // Función para mostrar una alerta de éxito o error
    function mostrarAlerta(mensaje, tipo) {
        if (tipo === "exito") {
            divAlert.classList.remove("alert-danger");
            divAlert.classList.add("alert-success");
        } else {
            divAlert.classList.remove("alert-success");
            divAlert.classList.add("alert-danger");
        }
        divAlert.innerHTML = mensaje;
        divAlert.style.display = "block";
    }

    // Evento de envío del formulario
    btnValidar.addEventListener("click", function (event) {
        event.preventDefault(); // Evitar que se envíe el formulario automáticamente

        // Obtener valores del formulario
        let nombre = txtNombre.value.trim();
        let telefono = txtTelefono.value.trim();
        let email = txtEmail.value.trim();
        let password = txtContrasena.value.trim();

        // Llamar a la función de inicio de sesión
        iniciarSesion(nombre, telefono, email, password);
    });
});

// Función para guardar datos de inicio de sesión en localStorage
function guardarDatosInicioSesion(usuario) {
    localStorage.setItem('usuarioActual', JSON.stringify(usuario));
}
