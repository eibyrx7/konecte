let btnValidar = document.getElementById("btnValidar");
let divAlert = document.getElementById("divAlert");
let divAlert2 = document.getElementById("divAlert2");
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
divAlert2.style.display = "none";

// Función para limpiar campos
function limpiarCampos() {
    txtnombre.value = "";
    txtDomicilio.value = "";
    txtTelefono.value = "";
    txtEmail.value = "";
    txtContrasena.value = "";
    txtContrasenaConfirma.value = "";
    selectOficio.value = "Elegir";
    inputFoto.value = "";
}

// Función para mostrar una alerta de éxito o error con un retraso
function mostrarAlertaConRetraso(mensaje, tipo, delay) {
    setTimeout(function() {
        mostrarAlerta(mensaje, tipo);
    }, delay);
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
    
    //Cambia la primera letra de cada nombre de minusciula a mayuscula
    let nombreConMayusculas = txtnombre.value.toLowerCase().split(' ').map(function(palabra) {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
      }).join(' ');
      txtnombre.value = nombreConMayusculas;

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
         // Verificar si el correo electrónico ya está registrado
    let usuariosGuardados = JSON.parse(localStorage.getItem('usuariosMaster')) || [];
    let correoExistente = usuariosGuardados.some(usuarioGuardado => usuarioGuardado.email === txtEmail.value);

    if (correoExistente) {
        mostrarAlerta("El correo electrónico ya está registrado.", "error");
    } else {
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
            mostrarAlertaConRetraso("El registro se ha guardado satisfactoriamente.", "exito");
            limpiarCampos();
            mostrarAlertaConRetraso("Redireccionando a iniciar sesión...", "exito", 1800); // 1800 milisegundos de retraso

            // Redireccionar solo cuando los datos son válidos
            setTimeout(function() {
                window.location.href = 'loginMaster.html';
            }, 3200); // 3200 milisegundos de retraso (1800 + 1500 milisegundos para la alerta de redireccionamiento + 1700 milisegundos extras)
        };
        reader.readAsDataURL(file);
    }
}});

// Función para guardar el usuario en el almacenamiento local
function guardarUsuarioEnLocalStorage(usuario) {
    let usuariosGuardados = JSON.parse(localStorage.getItem('usuariosMaster')) || [];
    usuariosGuardados.push(usuario);
    localStorage.setItem('usuariosMaster', JSON.stringify(usuariosGuardados));

    // evento personalizado para indicar que se ha agregado un nuevo usuario
    let eventoUsuarioAgregado = new Event('usuarioAgregado');
    document.dispatchEvent(eventoUsuarioAgregado);
}


