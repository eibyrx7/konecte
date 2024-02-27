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