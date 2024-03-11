document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al formulario y campos de entrada
    let btnValidar = document.getElementById("btnValidar");
    let form = document.getElementById("formulario");
    let txtEmail = document.getElementById("txtEmail");
    let txtContrasena = document.getElementById("txtContrasena");

    // Función para validar el inicio de sesión
    function iniciarSesion(email, password) {
        // Obtener usuarios almacenados en el localStorage
        const usuariosGuardados = JSON.parse(localStorage.getItem('usuariosMaster')) || [];

        // Buscar el usuario con el correo proporcionado
        const usuarioEncontrado = usuariosGuardados.find(usuario => usuario.email === email);

        // Verificar si se encontró un usuario y si la contraseña coincide
        if (usuarioEncontrado && usuarioEncontrado.contrasena === password) {
            // Iniciar sesión correctamente
            mostrarAlerta("El registro se ha guardado satisfactoriamente.");
            // Aquí podrías redirigir al usuario a otra página, por ejemplo:
            // window.location.href = 'pagina-de-inicio.html';
        } else {
            // Mostrar mensaje de error si las credenciales son incorrectas
            mostrarAlerta("El registro se ha guardado satisfactoriamente.");
        }
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



    // Evento de envío del formulario
    btnValidar.addEventListener("click", function (event) {
        event.preventDefault(); // Evitar que se envíe el formulario automáticamente

        // Obtener valores de correo y contraseña
        let email = txtEmail.value.trim();
        let password = txtContrasena.value.trim();

        // Validar que los campos no estén vacíos
        if (!email || !password) {
            alert('Por favor ingresa tu correo y contraseña');
            return;
        }

        // Llamar a la función de inicio de sesión
        iniciarSesion(email, password);
    });
});
