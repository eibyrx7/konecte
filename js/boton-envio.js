//boton envio
document.addEventListener('DOMContentLoaded', function() {
    
    form.addEventListener('sumit', function(event) {
      event.preventDefault();
  
      btnValidar.value = 'Sending...';
  
      const serviceID = 'service_9a9642q';
      const templateID = 'template_i4ayw4d';
  
      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email';
            alert('Sent!');
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
})});
