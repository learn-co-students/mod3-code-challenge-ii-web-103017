class Beer {
  constructor(json) {
    this.id = json.id;
    this.name = json.name;
    this.tagline = json.tagline;
    this.firstBrewed = json.first_brewed;
    this.description = json.description;
    this.imageUrl = json.image_url;
    this.foodPairing = [...json.food_pairing];
    this.brewersTips = json.brewers_tips;
    this.contributedBy = json.contributed_by;
    Beer.all.push(this);
  }

  renderBeersList() {
    let ul = document.getElementsByClassName('list-group')[0];
    ul.innerHTML += `<li id=${this.id}>${this.name}</li>`
  }

  renderBeerDetails() {
    const detailSection = document.getElementById('beer-detail');
    const beerInfo = `<h1>${this.name}</h1>
                      <img src="${this.imageUrl}">
                      <h3>${this.tagline}</h3>
                      <textarea id="text-area">${this.description}</textarea>
                      <button class=${this.id} id="edit-beer" class="btn btn-info">
                      Save
                      </button>`
    detailSection.innerHTML = beerInfo;
  }

  static beerListener() {
    let ul = document.getElementById('list-group');
    ul.addEventListener('click', e => {
      let id = parseInt(e.target.id);
      let target = Beer.all.find(x => x.id === id);
      target.renderBeerDetails();
      target.editBeer();
    })
  }

  editBeer() {
    const editButton = document.getElementById('edit-beer');
    editButton.addEventListener('click', e => {
      let id = e.target.className;
      let updatedText = document.getElementById('text-area').value;
      Adapter.updateBeer(id, updatedText);
    })
  }

}

Beer.all = []
