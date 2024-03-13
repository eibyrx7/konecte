document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al formulario y campos de entrada
    let btnValidar = document.getElementById("btnValidar");
    let txtEmail = document.getElementById("txtEmail");
    let txtContrasena = document.getElementById("txtContrasena");
    let divAlert = document.getElementById("divAlert");
    let divAlert2 = document.getElementById("divAlert2");
    let btnCerrarSesion = document.getElementById("btnCerrarSesion");

    // Obtener el estado de sesión almacenado en localStorage, si existe
    let sessionStatus = localStorage.getItem("sessionStatus");
    let usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));

    // Ocultar el botón de cerrar sesión al principio
    if (divAlert) {
        divAlert.style.display = "none";
    }
    if (divAlert2) {
        divAlert2.style.display = "none";
    }


    // Función para limpiar los campos de entrada
    function limpiarCampos() {
        txtEmail.value = "";
        txtContrasena.value = "";
    }

    // Función para validar el inicio de sesión
    function iniciarSesion(email, password) {
        // Obtener usuarios almacenados en el localStorage
        const usuariosGuardados = JSON.parse(localStorage.getItem('usuariosMaster')) || [];

        // Buscar el usuario con el correo proporcionado
        const usuarioEncontrado = usuariosGuardados.find(usuario => usuario.email === email);

        // Verificar si se encontró un usuario
        if (usuarioEncontrado) {
            // Verificar si la contraseña coincide
            if (usuarioEncontrado.contrasena === password) {
                // Iniciar sesión correctamente
                mostrarAlerta("Inicio de sesión exitoso", "exito");
                localStorage.setItem("sessionStatus", "iniciada");
                localStorage.setItem("usuarioActual", JSON.stringify(usuarioEncontrado));
                limpiarCampos();
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

    // Función para cerrar sesión
    function cerrarSesion() {
        localStorage.removeItem("sessionStatus");
        localStorage.removeItem("usuarioActual");
        localStorage.setItem("sessionStatus", "cerrada"); // Cambiar el estado de la sesión a "cerrada"
        // Redirigir a la página de inicio de sesión
        window.location.href = 'loginMaster.html';
    }

    // Función para mostrar una alerta de éxito o error
    function mostrarAlerta(mensaje, tipo) {
        if (divAlert) {
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
    }

    // Obtener nombre de usuario y mostrarlo
    function mostrarNombreUsuario() {
        let usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
        let nombreUsuarioSpan = document.getElementById("nombreUsuario");
        if (usuarioActual && nombreUsuarioSpan) {
            nombreUsuarioSpan.textContent = usuarioActual.nombre;
        }
    }

    // Llamar a la función para mostrar el nombre del usuario cuando se cargue la página
    mostrarNombreUsuario();

    // Mostrar u ocultar el botón de cerrar sesión según el estado de la sesión
    if (sessionStatus === "iniciada" && btnCerrarSesion) {
        btnCerrarSesion.style.display = "block";
    } else if (btnCerrarSesion) {
        btnCerrarSesion.style.display = "none";
    }

    // Evento de clic en el botón de validar
    if (btnValidar) {
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
    }

    // Agregar evento al botón de cerrar sesión si existe la sesión
    if (btnCerrarSesion) {
        btnCerrarSesion.addEventListener("click", cerrarSesion);
    }
});
