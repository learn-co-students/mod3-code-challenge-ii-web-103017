class Beer {
	constructor(data) {
		this.id = data.id
		this.name = data.name
		this.tagline = data.tagline
		this.description = data.description
		this.image_url = data.image_url
		Beer.all.push(this)
	}
	renderBeerName() {
		return `<li class="list-group-item" data-id=${this.id}>${this.name}</li>`
	}
	renderBeerDescription() {
		return `
		<h1>${this.name}</h1>
		<img src="${this.image_url}">
		<h3>${this.tagline}</h3>
		<textarea id="textarea">${this.description}</textarea>
		<button id="edit-beer" class="btn btn-info" data-id=${this.id}>Save</button>`
	}
}

Beer.all = []
