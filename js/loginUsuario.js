document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al formulario y campos de entrada
    let btnValidarIniciarSesion = document.getElementById("btnIniciarSesion");
    let btnValidarCrearUsuario = document.getElementById("btnCrearUsuario");
    let txtEmail = document.getElementById("txtEmail");
    let txtContrasena = document.getElementById("txtContrasena");
    let divAlert = document.getElementById("divAlert");
    let divAlert2 = document.getElementById("divAlert2");
    let btnCerrarSesion = document.getElementById("btnCerrarSesion");
    let nombreUsuarioSpan = document.getElementById("nombreUsuario");

    // Ocultar el div de alerta al principio
    if (divAlert) {
        divAlert.style.display = "none";
    }
    if (divAlert2) {
        divAlert2.style.display = "none";
    }

    // Función para iniciar sesión
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
                guardarDatosInicioSesion(usuarioEncontrado.email, usuarioEncontrado.contrasena);
                // Mostrar nombre de usuario
                if (nombreUsuarioSpan) {
                    nombreUsuarioSpan.textContent = usuarioEncontrado.nombre;
                }
                // Mostrar botón de cerrar sesión
                if (btnCerrarSesion) {
                    btnCerrarSesion.style.display = "block";
                }
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

    // Función para cerrar sesión
    function cerrarSesion() {
        localStorage.removeItem("sessionStatus");
        localStorage.removeItem("usuarioActual");
        localStorage.setItem("sessionStatus", "cerrada"); // Cambiar el estado de la sesión a "cerrada"
        // Ocultar nombre de usuario
        if (nombreUsuarioSpan) {
            nombreUsuarioSpan.textContent = "";
        }
        // Ocultar botón de cerrar sesión
        if (btnCerrarSesion) {
            btnCerrarSesion.style.display = "none";
        }
    }

    // Evento de envío del formulario para iniciar sesión
    if (btnValidarIniciarSesion) {
        btnValidarIniciarSesion.addEventListener("click", function (event) {
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
    }

    // Evento de envío del formulario para crear un nuevo usuario
    if (btnValidarCrearUsuario) {
        btnValidarCrearUsuario.addEventListener("click", function (event) {
            event.preventDefault(); // Evitar que se envíe el formulario automáticamente

            // Obtener valores de correo y contraseña
            let email = txtEmail.value.trim();
            let password = txtContrasena.value.trim();

            // Agregar aquí la lógica para crear un nuevo usuario
            // Por ejemplo:
            // crearUsuario(email, password);
        });
    }

    // Agregar evento al botón de cerrar sesión si existe la sesión
    if (btnCerrarSesion) {
        btnCerrarSesion.addEventListener("click", cerrarSesion);
    }
});

// Función para guardar datos de inicio de sesión en localStorage
function guardarDatosInicioSesion(correo, contraseña) {
    const usuario = {
        email: correo,
        contrasena: contraseña
    };
    localStorage.setItem('sessionStatus', 'iniciada');
    localStorage.setItem('usuarioActual', JSON.stringify(usuario));
}
