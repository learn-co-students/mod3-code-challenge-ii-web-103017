let allBeers = []

class Beer {
  constructor(json) {
    this.id = json.id
    this.name = json.name
    this.tagline = json.tagline
    this.first_brewed = json.first_brewed
    this.description = json.description
    this.image_url = json.image_url
    this.food_pairing = json.food_pairing
    this.brewers_tips = json.brewers_tips
    this.contributed_by = json.contributed_by
    allBeers.push(this)
  }

  static all() {
    return [...allBeers]
  }

  static createBeers(json) {
    json.forEach(beer => {
      let newBeer = new Beer(beer)

    })
  }

  static appendBeersToList() {
    let listGroup = document.getElementById('list-group')
    this.all().forEach(beer => {
      listGroup.innerHTML += `
      <div id="beer-card${beer.id}"style="border: 1px solid lightgrey">
        <h5>${beer.name}</h5>
      </div>
      `
    })
  }

  static addEventListeners() {
    this.all().forEach(beer => {
      let beerCard = document.getElementById(`beer-card${beer.id}`)
      beerCard.addEventListener('click', this.displayCurrentBeer)
      let saveBeer = document.getElementById(`save-beer${beer.id}`)
      beerCard.addEventListener('click', this.updateCurrentBeer)
    })

  }

  static updateCurrentBeer(e) {
    e.preventDefault()
    console.log(e);
  }


  static displayCurrentBeer() {
    // console.log(id);
    // console.log("this", this.id.slice(9));
    // console.log("event", event);

    // if (!id) {
      let id = parseInt(this.id.slice(9))
    // }
    console.log(id);

    let beerDetail = document.getElementById('beer-detail')
    let currentBeer = Beer.all().find(beer => beer.id === id)
    // currentBeer.food_pairing.forEach(fp => {
    //   let paring = document.getElementById('pairing')
    //   let p = document.createElement('p')
    //   p.innerHTML = `<p>fp</p>`
    //   pairing.appendChlid(p)
    // })
    console.log(currentBeer);


    beerDetail.innerHTML =''
    beerDetail.innerHTML += `
    <h1>${currentBeer.name}</h1>
    <img src="${currentBeer.image_url}" >
    <h3>${currentBeer.tagline}</h3>
    <form id="description">
      <textarea name="name" rows="8" cols="80">${currentBeer.description}</textarea>
      <button id="save-beer${currentBeer.id}"type="button" name="button" class="btn btn-primary">Save</button>

    </form>

    <h4>Brewers Tips:</h4>
    <p>${currentBeer.brewers_tips}</p>
    <h4 id="paring">Food Pairing:</h4>
    <p>${currentBeer.food_pairing[0]}</p>
    <p>${currentBeer.food_pairing[1]}</p>
    <p>${currentBeer.food_pairing[2]}</p>

    <h4>First Brewed:</h4>
    <p>${currentBeer.first_brewed}</p>
    <h4>Contributed By:</h4>
    <p>${currentBeer.contributed_by}</p>
    `
  }

// updateCurrentBeer() {
//
// }


}
