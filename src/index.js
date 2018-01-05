document.addEventListener("DOMContentLoaded", function(event){
  Adapter.getBeers();
  document.getElementById("beer-detail").style.display = "none";

  document.getElementById("list-group").addEventListener("click", function(event){
    document.getElementById("beer-detail").style.display = "inline";

    let beer = Beer.getById(parseInt(event.target.id));


    document.getElementById("beer-name").innerText = beer.name
    document.getElementById("beer-img").src = beer.image_url
    document.getElementById("beer-tagline").innerText = beer.tagline
    document.getElementById("beer-description").innerText = beer.description
    document.getElementById("edit-beer").dataset.id = beer.id

  });//end list-group listener

  document.getElementById("edit-beer").addEventListener("click", function(event) {
    let beer = Beer.getById(parseInt(event.target.dataset.id));
    beer.description = document.getElementById("beer-description").value;
    Adapter.updateBeer(beer);


  });//end edit-beer listener




});//end DOMContentLoaded
