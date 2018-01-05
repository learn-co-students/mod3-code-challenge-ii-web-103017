class Adapter {
  static fetchBeers() {
    return fetch('http://localhost:3000/beers').then(resp => resp.json())
  }

  static updateBeer(beerObj) {
    return fetch(`http://localhost:3000/beers/${beerObj.id}`, {
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      method: "PATCH",
      body: JSON.stringify(beerObj)
    }).then(resp => resp.json()).then(console.log)
  }

}
