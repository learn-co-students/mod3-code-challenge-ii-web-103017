document.addEventListener('DOMContentLoaded', () => {
  BeerAdapter.getBeers()


  document.addEventListener('click', (e)=>{

    if (e.target.className === "list-group-item"){
      let id = beerId(e.target.id)
      let beer = Beer.findById(id)
      let display = document.getElementById('beer-detail')

      display.innerHTML =`
      <h1>${beer.name}</h1>
      <img src="${beer.url}">
      <h3>${beer.tagline}</h3>
      <textarea id="beer-description">${beer.description}</textarea>
      <button id="edit-beer" name="${beer.id}" class="btn btn-info">
        Save
      </button>
      `
    }


    if (e.target.id === "edit-beer"){
      let beer = Beer.findById(parseInt(e.target.name))
      let display = document.getElementById('beer-detail')
      beer.description = document.getElementById("beer-description").value

      BeerAdapter.updateBeer(beer)

      display.innerHTML = `
      <h2>Your beer wisdom has been passed on!</h2>
      <a class="list-group-item" id="beer-${beer.id}" href="#">View Your Beer</a>
      `
      }

  })

})


//HELPER METHODS
