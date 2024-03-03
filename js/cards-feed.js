function addItem(item){
  const itemHTML = '<div class="card" style="width: 18rem;">\n' +
      '    <img src="'+item.img +'" class="card-img-top" alt="image" id="cardsfeed">\n' +
      '    <div class="card-body">\n' +
      '        <h5 class="card-title">'+item.name+'</h5>\n' +
      '        <p class="card-text">'+item.description+'</p>\n' +
      '        <a href="#" class="btn btn-primary">Add</a>\n' +
      '    </div>\n' +
      '</div>\n' +
      '<br/>';
  const itemsContainer = document.getElementById("list-items");
  itemsContainer.innerHTML += itemHTML;
}


addItem({'name':'Plomería',
    'img':'https://i.pinimg.com/originals/de/5e/dd/de5edde86bfecee8e7320629a2cf95d9.jpg',
    'description':''})

addItem({'name':'Albañilería',
    'img':'https://st4.depositphotos.com/12785820/21327/v/450/depositphotos_213274828-stock-illustration-man-builder-trowel-his-hand.jpg',
    'description':''})

addItem({'name':'Carpintería',
    'img':'https://image.freepik.com/vector-gratis/carpinteros-taller-herramientas-carpinteria_8071-1228.jpg',
    'description':''})

addItem({'name':'Sastrería',
    'img':'https://media.istockphoto.com/id/1368945587/es/vector/hombre-diseñador-de-moda-o-sastre-con-hilo-y-aguja-ajuste-de-ropa-modelo-de-prenda-en.jpg?s=612x612&w=0&k=20&c=Dt4hNoR2X_k-LUS3SuU0o3Y-HYkgdo3hUJrNocT2ywM=',
    'description':''})

addItem({'name':'Electricista',
    'img':'./resources/electricista.png',
    'description':''})

addItem({'name':'Personal de Limpieza',
    'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXVla_MLLpCC0dOz6hXy27wMjbAi9dh9llVA&s',
    'description':''})

addItem({'name':'Herrería',
    'img':'https://cdn-icons-png.flaticon.com/512/7551/7551430.png',
    'description':''})

addItem({'name':'Planchaduría',
    'img':'https://2.bp.blogspot.com/-0RFrYvlzb0w/W-jWMLsuKlI/AAAAAAAI2Gg/TM0v5L5YDbsHL6Qzvp40ax4-HnjYxRt6wCLcBGAs/s1600/307af861a84fe7f51b6e53f9e0911799.jpg',
    'description':''})

addItem({'name':'Pintor',
    'img':'https://i.pinimg.com/originals/da/a6/52/daa652ac99b274fdb2b5d32b92c54b62.jpg',
    'description':''})

addItem({'name':'Cerrajero',
    'img':'https://st.depositphotos.com/1006018/5162/v/450/depositphotos_51621539-stock-illustration-locksmith-carry-key-shield-retro.jpg',
    'description':''})

addItem({'name':'Otros',
    'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7bOfq47WJH95lxautfwy8DeB66IMKVqVSHg&s',
    'description':''})