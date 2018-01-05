class Beer {
  constructor(data){
    this.id = data.id
    this.name = data.name
    this.tagline = data.tagline
    this.firstBrewed = data.first_brewed
    this.description = data.description
    this.url = data.image_url
    this.foodPairing = data.food_pairing
    this.brewersTips = data.brewers_tips
    this.contributedBy = data.contributed_by
    Beer.all.push(this)
  }



}

Beer.all = []

Beer.findById = (id) => {
  return Beer.all.filter((b)=>{
    return b.id === id
  })[0]
}





class BeerAdapter{

  static getBeers(){
    fetch('http://localhost:3000/beers')
    .then(resp => resp.json())
    .then(json => populateBeers(json))
  }

  static updateBeer(beer) {
    const params = {
          "method": "PATCH",
          "headers": {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          "body": JSON.stringify({description: beer.description})
        }
    return fetch(`http://localhost:3000/beers/${beer.id}`, params)
    }


}


//HELPER METHODS

function populateBeers(json){
  json.forEach((b) =>{
    new Beer(b)
    let newBeerName = document.createElement('LI')
    newBeerName.innerHTML = `<a class="list-group-item" id="beer-${b.id}" href="#">${b.name}</a>`
    document.getElementById('list-group').appendChild(newBeerName)

  })

}

function beerId(string){
  return parseInt(string.split("-")[1])
}
