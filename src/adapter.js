class Adapter {
  static getBeers(){
    fetch("http://localhost:3000/beers")
    .then(res => res.json())
    .then(json => creatBeerDivs(json))
  }

  static updateBeer(beer) {
    fetch(`http://localhost:3000/beers/${parseInt(beer.id)}`,
    {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({"description": beer.description})
    }


  )};


}

function creatBeerDivs(json) {
  json.forEach( x => {
    let newBeer = new Beer(x)
    document.getElementById("list-group").innerHTML +=
    `<li class="list-group-item" id=${newBeer.id}>${newBeer.name}</li>`
  }
  )


}
