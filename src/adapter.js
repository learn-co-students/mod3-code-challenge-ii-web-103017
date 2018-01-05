class Adapter {
  static getAndSetBeerNames(){
    fetch("http://localhost:3000/beers")
    .then(resp => resp.json())
    .then(json => {
      json.forEach(b => {
        const beer = new Beer(b)
        beer.render()

      })
    })

  }

  static updateDescription(description, id){
      fetch(`http://localhost:3000/beers/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
          body: JSON.stringify({
          description: `${description}`
        })
      }).then(resp => resp.json())
}



}
