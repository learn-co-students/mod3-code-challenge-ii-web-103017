class Beer {

  // It would be better to use the private scope class constructor here, but I'm hit or miss on the syntax. If I had more time, I would look up that syntax to protect my Beer.all which my code relies on.
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.tagline = data.tagline
    this.description = data.description
    this.image_url = data.image_url
    Beer.all.push(this)
  }

  renderName() {
    return `<li class="list-group-item" data-id=${this.id}>${this.name}</li>`
  }

  //How do you render text for display and edit using html tags?

  render() {
    return `
    <div class="beer-show" data-id=${this.id}>
      <h1>${this.name}</h1>
      <img src=${this.image_url}></img>
      <h3>${this.tagline}</h3>
      <textarea>${this.description}</textarea>
      <button id="edit-beer" class="btn btn-info" data-id=${this.id}>Edit</button>
    </div>
    `
  }

  renderForm() {
    return `
      <form>
        <input id="edit-beer-name" value="${this.name}"></input>
        <input id="edit-beer-tagline" value="${this.tagline}"></input>
        <input id="edit-beer-description" value="${this.description}"></input>
        <input type="submit" id="submit"data-id=${this.id}></input>
      </form>
    `
  }

  static findBeerById(id) {
    return Beer.all.find(beer => beer.id === id)
  }
}

Beer.all = []
