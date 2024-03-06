document.addEventListener("DOMContentLoaded", function() {
    // Obtener los usuarios del localStorage
    let usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
    let datosUsuario = document.getElementById("datosUsuario");

    // Recorrer los usuarios y crear una tarjeta para cada uno
    usuariosGuardados.forEach(function(usuario) {
        // Crear elementos HTML para la tarjeta
        let card = document.createElement("div");
        card.classList.add("card", "text-bg-primary", "mb-3");
        card.style.maxWidth = "18rem";

        let cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header");
        cardHeader.textContent = "Usuario";

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        let cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = usuario.nombre;

        let cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.textContent = `Domicilio: ${usuario.domicilio}, Teléfono: ${usuario.telefono}, Email: ${usuario.email}, Oficio: ${usuario.oficio}`;

        // Agregar los elementos al cuerpo de la tarjeta
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);

        // Agregar el cuerpo y encabezado a la tarjeta
        card.appendChild(cardHeader);
        card.appendChild(cardBody);

        // Agregar la tarjeta al contenedor de datos
        datosUsuario.appendChild(card);
    });
});
