class Adapter
{
  static getBeers()
  {
    return fetch('http://localhost:3000/beers').then(resp => resp.json())
  }
  static updateBeer(id, description)
  {
    return fetch(`http://localhost:3000/beers/${id}`,{
      method: "PATCH",
      headers:  {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({description: `${description}`})
    }).then(resp => resp.json())

  }
}
class Beer{
  constructor(id, name, description, image_url, tag)
  {
    this.id = id
    this.name = name
    this.description = description
    this.tag =
    this.image_url = image_url

  }

  renderBeer()
  {
    let listGroup = document.getElementById("list-group")
    listGroup.innerHTML += `<li class="list-group-item" data-value=${this.id}> ${this.name}</li>`
  }
  showBeer()
  {
    let beerDetail = document.getElementById("beer-detail")
    beerDetail.innerHTML = ''
    beerDetail.setAttribute("beer-id", this.id)
    beerDetail.innerHTML += `<h1>${this.name}</h1>
                            <img src="${this.image_url}">
                            <h3>${this.tag}</h3>
                            <textarea id="text">${this.description}</textarea>
                            <form>
                              <button id="edit-beer" class="btn btn-info">
                                  Save
                              </button>
                            </form>
`
  }
}
Beer.all = []

Adapter.getBeers().then(function(beers){
  beers.forEach(function(beer){
    let newBeer = new Beer(beer.id, beer.name, beer.description, beer.image_url, beer.tagline)
    Beer.all.push(newBeer)
    newBeer.renderBeer()
  })

})
// Adapter.updateBeer(1, "This beer tastes good.")


document.getElementById("list-group").addEventListener('click', function(event){
  let beerID = parseInt(event.target.getAttribute("data-value"))


  let beerToShow = Beer.all.find(function(beer){
     return beer.id == beerID
  })
  beerToShow.showBeer()
})

document.getElementById("beer-detail").addEventListener('submit', function(event){
  event.preventDefault()
   // let beerID = parseInt(event.target.getAttribute("data-value"))
   let beerID = parseInt(event.target.parentElement.getAttribute("beer-id"))

  let beerToEdit = Beer.all.find(function(beer){
    return beer.id === beerID
  })
  let description = document.getElementById("text").value
   // beerToEdit.showBeer()
   Adapter.updateBeer(beerID, description)

})
