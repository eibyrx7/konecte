//boton envio
function envioBandera (btnValidar){

    let form = document.getElementById('formulario');
    btnValidar.value = 'Sending...';

    const serviceID = 'service_9a9642q';
    const templateID = 'template_i4ayw4d';

    emailjs.sendForm(serviceID, templateID, form)
      .then(() => {
        btnValidar.value = 'Send Email';
          alert('Sent!');
      }, (err) => {
        btnValidar.value = 'Send Email';
          alert(JSON.stringify(err));
      });

}