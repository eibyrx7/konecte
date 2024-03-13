let btnValidar = document.getElementById("btnValidar");
let divAlert = document.getElementById("divAlert");
let divAlert2 = document.getElementById("divAlert2");
let txtnombre = document.getElementById("txtnombre");
let txtTelefono = document.getElementById("txtTelefono");
let txtEmail = document.getElementById("txtEmail");
let txtContrasena = document.getElementById("txtContrasena");
let txtContrasenaConfirma = document.getElementById("txtContrasenaConfirma");

// Ocultar el div de alerta al principio
if (divAlert) {
    divAlert.style.display = "none";
}
if (divAlert2) {
    divAlert2.style.display = "none";
}

//funcion de limpiar campos
function limpiarCampos() {
    txtnombre.value = "";
    txtTelefono.value = "";
    txtEmail.value = "";
    txtContrasena.value = "";
    txtContrasenaConfirma.value = "";
}

// Función para mostrar una alerta de éxito o error
function mostrarAlerta(mensaje, tipo) {
    divAlert.innerHTML = mensaje;
    divAlert.style.display = "block";
    if (tipo === "exito") {
        divAlert.classList.remove("alert-danger");
        divAlert.classList.add("alert-success");
    } else {
        divAlert.classList.remove("alert-success");
        divAlert.classList.add("alert-danger");
    }
}

// Agregar evento de click al botón de validación
btnValidar.addEventListener("click", function (event) {
    event.preventDefault();

    // Expresiones regulares
    let regexNombre = /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/;
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
        // Verificar si el correo electrónico ya está registrado
        let usuariosGuardados = JSON.parse(localStorage.getItem('usuariosMaster')) || [];
        let correoExistente = usuariosGuardados.some(usuarioGuardado => usuarioGuardado.email === txtEmail.value);

        if (correoExistente) {
            mostrarAlerta("El correo electrónico ya está registrado.", "error");
        } else {
            let usuario = {
                nombre: `${txtnombre.value}`,
                telefono: `${txtTelefono.value}`,
                email: `${txtEmail.value}`,
                contrasena: `${txtContrasena.value}`,
            };
            guardarUsuarioEnLocalStorage(usuario);
            mostrarAlerta("El registro se ha guardado satisfactoriamente.", "exito");
            limpiarCampos();
            // Redireccionar solo cuando los datos son válidos
            window.location.href = 'index.html';
        }
    }
});

// Función para guardar el usuario en el almacenamiento local
function guardarUsuarioEnLocalStorage(usuario) {
    let usuariosGuardados = JSON.parse(localStorage.getItem('usuariosUsu')) || [];
    usuariosGuardados.push(usuario);
    localStorage.setItem('usuariosUsu', JSON.stringify(usuariosGuardados));
}

// Esperar a que el DOM esté completamente cargado para ejecutar el código
document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al formulario y campos de entrada
    let btnValidarIniciarSesion = document.getElementById("btnValidar");
    let txtEmail = document.getElementById("txtEmail");
    let txtContrasena = document.getElementById("txtContrasena");
    let divAlert = document.getElementById("divAlert");
    let btnCerrarSesion = document.getElementById("btnCerrarSesion");
    let nombreUsuarioSpan = document.getElementById("nombreUsuario");

    // Ocultar el div de alerta al principio
    if (divAlert) {
        divAlert.style.display = "none";
    }

    // Función para iniciar sesión
    function iniciarSesion(email, password) {
        // Obtener usuarios almacenados en el localStorage
        const usuariosGuardados = JSON.parse(localStorage.getItem('usuariosUsu')) || [];

        // Buscar el usuario con el correo proporcionado
        const usuarioEncontrado = usuariosGuardados.find(usuario => usuario.email === email && usuario.contrasena === password);

        // Verificar si se encontró un usuario
        if (usuarioEncontrado) {
            // Iniciar sesión correctamente
            mostrarAlerta("Inicio de sesión exitoso", "exito");
            // Guardar datos de inicio de sesión en localStorage
            guardarDatosInicioSesion(usuarioEncontrado.email, usuarioEncontrado.contrasena);
            // Mostrar nombre de usuario
            let nombreUsuarioSpanU = document.getElementById("nombreUsuarioU");
    if (nombreUsuarioSpanU) {
        nombreUsuarioSpanU.textContent = usuarioEncontrado.nombre;
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
