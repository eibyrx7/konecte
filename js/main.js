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
let form = document.getElementById('form');

divAlert.style.display = "none";
btnValidar.addEventListener("click", function (event) {
    event.preventDefault();

    let regexNombre = /^[A-Za-z]{3,15}$/;
    let regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    let regexTelefono = /^[1-9]\d{9}$/;
    let regexMensaje = /^.{1,200}$/;

    let errorMessage = ""; // Acumulador de mensajes de error


    if (!regexNombre.test(txtDato.value)) {
        errorMessage += "El nombre tiene un formato incorrecto. </br>";
    }

    if (!regexEmail.test(txtEmail.value)) {
        errorMessage += "El email tiene un formato incorrecto. </br>";
    }

    if (!regexTelefono.test(txtTelefono.value)) {
        errorMessage += "El teléfono tiene un formato incorrecto. </br>";
    }
    if (!regexMensaje.test(txtMensaje.value)) {
        errorMessage += "El mensaje tiene un formato incorrecto.";
    }

    divAlert.innerHTML = errorMessage; // Asigna el mensaje acumulado
    if (errorMessage === "") {
        divAlert.style.display = "none";
    } else {
        divAlert.style.display = "block"; // Muestra la alerta si hay errores
    }
});

btnClear.addEventListener("click", function (event) {
    event.preventDefault();
    txtDato.value = "";
    txtEmail.value = "";
    txtTelefono.value = "";
    txtMensaje.value = "";

    divAlert.style.display = "none";

});




document.addEventListener('DOMContentLoaded', function() {
    
    form.addEventListener('sumit', function(event) {
      event.preventDefault();
  
      btnValidar.value = 'Sending...';
  
      const serviceID = 'service_9a9642q';
      const templateID = 'template_i4ayw4d';
  
      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btnValidar.value = 'Send Email';
          alert('¡Envío con exito!');
        })
        .catch((err) => {
            btnValidar.value = 'Send Email';
          alert(JSON.stringify(err));
        });
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

