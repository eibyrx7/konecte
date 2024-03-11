document.addEventListener("DOMContentLoaded", function() {
    function actualizarUsuarios() {
        // Obtener los usuarios del localStorage
        let usuariosGuardados = JSON.parse(localStorage.getItem('usuariosMaster')) || [];
        let datosUsuario = document.getElementById("datosUsuario");

        // Limpiar la lista de usuarios antes de actualizarla
        datosUsuario.innerHTML = '';

        // Recorrer los usuarios y crear una tarjeta para cada uno
        usuariosGuardados.forEach(function(usuario) {
            // Filtrar por dirección si se ha ingresado una en el campo de búsqueda
            let direccionBuscada = document.getElementById("inputDireccion").value.trim().toLowerCase();
            if (direccionBuscada !== '' && !usuario.domicilio.toLowerCase().includes(direccionBuscada)) {
                return; // Saltar a la siguiente iteración si la dirección no coincide
            }

            // Crear la estructura de la tarjeta
            let card = document.createElement("div");
            card.classList.add("card", "mb-3");

            let row = document.createElement("div");
            row.classList.add("row", "g-0");

            let colImg = document.createElement("div");
            colImg.classList.add("col-md-4");

            let img = document.createElement("img");
            img.src = usuario.foto; // Asignar la ruta de la imagen del usuario
            img.classList.add("img-fluid", "rounded-start");
            img.alt = "Imagen del usuario";

            let colBody = document.createElement("div");
            colBody.classList.add("col-md-8");

            let cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            let cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = usuario.nombre;

            let cardText = document.createElement("p");
            cardText.classList.add("card-text");
            cardText.textContent = `Domicilio: ${usuario.domicilio}, 
            Teléfono: ${usuario.telefono}, 
            Email: ${usuario.email}, 
            Oficio: ${usuario.oficio}`;

            // Agregar elementos a la estructura de la tarjeta
            colImg.appendChild(img);
            colBody.appendChild(cardBody);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            row.appendChild(colImg);
            row.appendChild(colBody);
            card.appendChild(row);

            // Agregar la tarjeta al contenedor de datos
            datosUsuario.appendChild(card);
        });
    }

    // Actualizar usuarios cuando se agrega un nuevo usuario o se realiza una búsqueda
    document.addEventListener('usuarioAgregado', actualizarUsuarios);
    document.getElementById("inputDireccion").addEventListener('input', actualizarUsuarios);

    // Llamar a la función de actualización inicialmente
    actualizarUsuarios();
});
