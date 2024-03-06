function addItem(item){
  const itemHTML = '<div class="card" style="width: 18rem;">\n' +
      '        <h5 class="card-title">'+item.name+'</h5>\n' +
      '    <img src="'+item.img +'" class="card-img-top" alt="image" id="cardsfeed">\n' +
      '    <div class="card-body">\n' +
      '        <h5 class="card-title">'+item.name+'</h5>\n' +
      '        <p class="card-text">'+item.description+'</p>\n' +
      '        <button type="button" class="btn btn-danger">Encuéntralo</button>\n' +
      '    </div>\n' +
      '</div>\n' +
      '<br/>';
  const itemsContainer = document.getElementById("list-items");
  itemsContainer.innerHTML += itemHTML;
}


addItem({'name':'Plomería',
    'img':'./sourcesFeed/plomero.jpg',
    'description':'Nuestros expertos en plomería se encargan de resolver cualquier problema relacionado con tuberías, grifos, desagües y sistemas de agua. Confía en nuestros profesionales para soluciones rápidas y efectivas.'})

addItem({'name':'Albañilería',
    'img':'./sourcesFeed/albañil.jpg',
    'description':'Los albañiles en nuestra plataforma son especialistas en construcción y reparación de estructuras de todo tipo. Desde pequeñas reparaciones hasta proyectos de construcción más grandes.'})

addItem({'name':'Carpintería',
    'img':'./sourcesFeed/carpintero.jpg',
    'description':'¿Necesitas muebles a medida o reparaciones de carpintería? Nuestros carpinteros están listos para crear piezas únicas y solucionar cualquier problema relacionado con la madera'})

addItem({'name':'Sastrería',
    'img':'./sourcesFeed/costura.jpg',
    'description':'Los sastres en nuestra plataforma son maestros en el arte de la confección y la reparación de prendas. Desde ajustes simples hasta creaciones personalizadas, confía en nuestros profesionales para dar vida a tus ideas.'})

addItem({'name':'Electricista',
    'img':'./sourcesFeed/electricoC.jpg',
    'description':'¿Problemas eléctricos en casa o en tu negocio? Nuestros electricistas están capacitados para manejar cualquier tipo de instalación, reparación o mantenimiento eléctrico.'})

addItem({'name':'Personal de Limpieza',
    'img':'./sourcesFeed/limpieza.jpg',
    'description':'Nuestro equipo de personal de limpieza se encarga de mantener tus espacios impecables y ordenados. Desde hogares hasta oficinas, nuestros profesionales realizan limpiezas a fondo y personalizadas según tus necesidades'})

addItem({'name':'Herrería',
    'img':'./sourcesFeed/herrero.jpg',
    'description':'Nuestros herreros son artesanos expertos en trabajar el metal con precisión y creatividad. Desde diseños personalizados hasta reparaciones de hierro forjado, confía en nuestros profesionales para dar forma a tus ideas en metal con habilidad y destreza.'})

addItem({'name':'Planchaduría',
    'img':'./sourcesFeed/plancharB.jpg',
    'description':'Nuestro equipo de profesionales se dedica con pasión y precisión al arte del planchado de ropa. Con años de experiencia y un ojo para el detalle, nuestros masters en planchado se dedican a que cada prenda que pasa por sus manos queden impecables y listas para lucir.'})

addItem({'name':'Pintor',
    'img':'./sourcesFeed/pintor.jpg',
    'description':'¿Buscas darle un nuevo aspecto a tu hogar? Nuestros pintores de casas están listos para transformar tus espacios con colores vibrantes y acabados de alta calidad. Confía en nuestros expertos para un trabajo impecable que resalte la belleza de tu hogar.'})

addItem({'name':'Cerrajero',
    'img':'./sourcesFeed/cerrajero2.jpg',
    'description':'La seguridad de tu hogar o negocio es nuestra prioridad. Nuestros cerrajeros están capacitados para proporcionar soluciones rápidas y confiables para problemas de cerraduras, llaves y sistemas de seguridad. Confía en nuestros profesionales para proteger lo que más valoras'})

addItem({'name':'Otros',
    'img':'./sourcesFeed/otros.jpg',
    'description':'Te invitamos a explorar un mundo de habilidades únicas y profesionales especializados que destacan por su creatividad y experiencia fuera de lo común. Desde artesanos tradicionales hasta expertos en diversos oficios'})
