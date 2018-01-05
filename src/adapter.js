class Adapter {
  constructor() {

  }

  static getBeers() {
    return fetch('http://localhost:3000/beers', {
      // method: 'GET',
      // headers: {
      //   'Accept': 'application/json',
      //   'Content-Type': 'application/json'
      // },
      // body: JSON.stringify(json)
    }).then(res => res.json())
    .then(json => Beer.createBeers(json))
    .then(() => Beer.appendBeersToList())
    .then(() => Beer.addEventListeners())
    // .then(() => Beer.displayCurrentBeer())
  }
}
