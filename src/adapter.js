class Adapter {

  static getBeers(){
    return fetch("http://localhost:3000/beers")
    .then(resp => resp.json())
    .then(json => {
      json.forEach(beer => {
        let newBeer = new Beer(beer)
        let listBeer = document.querySelector('.list-group')
        listBeer.innerHTML += `<li class="beer"><a href="#">${newBeer.name}</a></li>`
      })
    })
  }

  static updateBeer(id, description){
    return fetch(`http://localhost:3000/beers/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "description": `${description}`
      })
    })
  }

}
