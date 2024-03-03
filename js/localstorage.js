//local storage
let btnValidar2 = document.getElementById("btnValidar");

document.addEventListener("click", function (event) {
    let txtnombre = document.getElementById("txtNombre");
    let txtEmail = document.getElementById("txtEmail");
    let txtTelefono = document.getElementById("txtTelefono");
    let txtMensaje = document.getElementById("txtMensaje");

    txtnombre = txtnombre.value;
    localStorage.setItem("txtnombre", txtnombre);
    txtEmail = txtEmail.value;
    localStorage.setItem("txtEmail", txtEmail);
    txtTelefono = txtTelefono.value;
    localStorage.setItem("txtTelefono", txtTelefono);
    txtMensaje = txtMensaje.value;
    localStorage.setItem("txtMensaje", txtMensaje);

});