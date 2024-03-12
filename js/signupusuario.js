document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al formulario y campos de entrada
    let btnValidar = document.getElementById("btnValidar");
    let form = document.getElementById("formulario");
    let txtEmail = document.getElementById("txtEmail");
    let txtContrasena = document.getElementById("txtContrasena");
    let divAlert = document.getElementById("divAlert");
    let divAlert2 = document.getElementById("divAlert2");

    // Ocultar el div de alerta al principio
    divAlert.style.display = "none";
    divAlert2.style.display = "none";

    // Función para validar el inicio de sesión
    function iniciarSesion(email, password) {
        // Obtener usuarios almacenados en el localStorage
        const usuariosGuardados = JSON.parse(localStorage.getItem('usuariosUsu')) || [];

        // Buscar el usuario con el correo proporcionado
        const usuarioEncontrado = usuariosGuardados.find(usuario => usuario.email === email);

        // Verificar si se encontró un usuario
        if (usuarioEncontrado) {
            // Verificar si la contraseña coincide
            if (usuarioEncontrado.contrasena === password) {
                // Iniciar sesión correctamente
                mostrarAlerta("Inicio de sesión exitoso", "exito");
                // Guardar datos de inicio de sesión en localStorage
                guardarDatosInicioSesion(usuarioEncontrado);
                // Redirigir al usuario a otra página, por ejemplo:
                window.location.href = 'index.html';
            } else {
                // Mostrar mensaje de error si las credenciales son incorrectas
                mostrarAlerta("Credenciales incorrectas", "error");
            }
        } else {
            // Mostrar mensaje de error si no se encontró ningún usuario con el correo proporcionado
            mostrarAlerta("Usuario no Registrado", "error");
        }
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

        // Obtener valores de correo y contraseña
        let email = txtEmail.value.trim();
        let password = txtContrasena.value.trim();

        // Validar que los campos no estén vacíos
        if (!email || !password) {
            mostrarAlerta('Por favor ingresa tu correo y contraseña');
            return;
        }

        // Llamar a la función de inicio de sesión
        iniciarSesion(email, password);
    });
});

// Función para guardar datos de inicio de sesión en localStorage
function guardarDatosInicioSesion(usuario) {
    localStorage.setItem('usuarioActual', JSON.stringify(usuario));
}
