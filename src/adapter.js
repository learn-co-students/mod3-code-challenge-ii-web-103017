class Adapter {

  static getBeers() {
    fetch('http://localhost:3000/beers')
    .then(resp => resp.json())
    .then(json => {
      json.forEach(beer => {
        const newBeer = new Beer(beer);
        newBeer.renderBeersList();
      })
    })
    Beer.beerListener();
  }

  static updateBeer(id, updatedText) {
    fetch(`http://localhost:3000/beers/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        description: updatedText
      })
    })
  }

}
