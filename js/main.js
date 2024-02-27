document.addEventListener("DOMContentLoaded", function () {
    var images = ["./resources/imagen1.jpg", "./resources/imagen2.jpg", "./resources/imagen3.jpg"]; // Lista de imágenes
    var currentIndex = 0;
    var container = document.getElementById("background-container");

    function changeBackground() {
        container.style.backgroundImage = "url('" + images[currentIndex] + "')";
        currentIndex = (currentIndex + 1) % images.length; // Avanza al siguiente índice, volviendo al principio si alcanza el final
    }

    // Cambia la imagen de fondo cada 3 segundos (3000 milisegundos)
    setInterval(changeBackground, 5000);
});

let btnClear = document.getElementById("btnClear");   
let btnValidar = document.getElementById("btnValidar");
let divAlert = document.getElementById("divAlert");
let txtDato = document.getElementById("txtDato");
let txtEmail = document.getElementById("txtEmail");
let txtTelefono = document.getElementById("txtTelefono");
let txtMensaje = document.getElementById("txtMensaje");


btnValidar.addEventListener("click", function (event) {
    event.preventDefault();

    let regexNombre = /^[A-Za-z]{3,15}$/;
    let regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    let regexTelefono = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    let regexMensaje = /^.{1,200}$/;

    let errorMessage = ""; // Acumulador de mensajes de error

    if (!regexNombre.test(txtDato.value)) {
        errorMessage += "El nombre tiene un formato incorrecto. ";
    }

    if (!regexEmail.test(txtEmail.value)) {
        errorMessage += "El email tiene un formato incorrecto. ";
    }

    if (!regexTelefono.test(txtTelefono.value)) {
        errorMessage += "El teléfono tiene un formato incorrecto.";
    }
    if (!regexMensaje.test(txtMensaje.value)) {
        errorMessage += "El mensaje tiene un formato incorrecto.";
    }

    divAlert.innerHTML = errorMessage; // Asigna el mensaje acumulado
});

btnClear.addEventListener("click", function (event) {
    event.preventDefault();
    txtDato.value = "";
    txtEmail.value = "";
    txtTelefono.value = "";
    txtMensaje.value = "";

});




document.getElementById('form', function(event) {
    event.preventDefault();

    const btn = document.getElementById('btnValidar');
    btn.value = 'Sending...';

    const serviceID = 'service_tuServiceID'; // Reemplaza con tu Service ID
    const templateID = 'template_tuTemplateID'; // Reemplaza con tu Template ID

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email';
            alert('Sent!');
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
});


function getData(){
    let promesa = fetch ("https://fakestoreapi.com/products", 
                {method:"GET"});

    promesa.then((response)=> {
        response.json().then( (data)=> {createCards(data)})
        .catch((err)=> {console.log("Ocurrio un error en la solicitud", err)});
    })
    .catch((err)=> {console.log("Ocurrio un error en la solicitud", err)});
}//getData

let mainProds = document.getElementById("mainProds");
function createCards(prods){
    prods.forEach(prod => {
        mainProds.insertAdjacentHTML("beforeend",`
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${prod.image}" class="img-fluid rounded-start" alt="${prod.description}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${prod.title}</h5>
                  <p class="card-text">${prod.category}</p>
                  <p class="card-text"><small class="text-muted">${prod.description}</small></p>
                </div>
              </div>
            </div>
          </div>
          `);
    });
}//createCards
getData();

