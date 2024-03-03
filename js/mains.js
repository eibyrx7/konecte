let row = document.getElementById("row");
let btn = document.getElementById("btn");

document.addEventListener("click", function (event) {
    let txtDato = document.getElementById("txtDato");
    let txtDomicilio = document.getElementById("txtDomicilio");
    let txtTelefono = document.getElementById("txtTelefono");
    let elegir = document.getElementById("elegir");
    let inputIdentificacion = document.getElementById("inputIdentificacion");
    let inputFoto = document.getElementById("inputFoto");

    txtDato = txtDato.value;
    localStorage.setItem("txtDato", txtDato);
    txtDomicilio = txtDomicilio.value;
    localStorage.setItem("txtDomicilio", txtDomicilio);
    txtTelefono = txtTelefono.value;
    localStorage.setItem("txtTelefono", txtTelefono);
    elegir = elegir.value;
    localStorage.setItem("elegir", elegir);
    inputIdentificacion = inputIdentificacion.value;
    localStorage.setItem("inputIdentificacion", inputIdentificacion);
    inputFoto = inputFoto.value;
    localStorage.setItem("inputFoto", inputFoto);
});

const btnValidar = document.getElementById('btnValidar');
    const divAlert = document.getElementById('divAlert');

    btnValidar.addEventListener('click', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('txtDato').value;
        const domicilio = document.getElementById('txtDomicilio').value;
        const telefono = document.getElementById('txtTelefono').value;

        const regexNombre = /^[A-Za-z]{3,15}$/;
        const regexDomicilio = /^.{1,50}$/;
        const regexTelefono = /^[1-9]\d{9}$/;

        let errorMessage = '';

        if (!regexNombre.test(nombre)) {
            errorMessage += 'El nombre tiene un formato incorrecto. ';
        }

        if (!regexDomicilio.test(domicilio)) {
            errorMessage += 'El domicilio tiene un formato incorrecto. ';
        }

        if (!regexTelefono.test(telefono)) {
            errorMessage += 'El teléfono tiene un formato incorrecto. ';
        }

        divAlert.innerHTML = errorMessage.trim();
        divAlert.style.display = errorMessage ? 'block' : 'none';
    });