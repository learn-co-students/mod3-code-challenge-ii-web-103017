function showBeerName(beer, beerNameDom) {
  beerNameDom.innerHTML += beer.renderName()
}

function nameClickHandler(beerDetail) {
  return event => {
    if (event.target.className === 'list-group-item')
    event.preventDefault()
    const clickBeer = Beer.findBeerById(parseInt(event.target.dataset.id))
    beerInfoDom(clickBeer, beerDetail)
  }
}

// needs a refactor
function detailsHandler(detailsDomElement) {
  return event => {
    if(event.target.id === 'edit-beer') {
      // to Edit Beer could serve as a variable for both if statements in the refactoring.
      event.preventDefault()
      const toEditBeer = Beer.findBeerById(parseInt(event.target.dataset.id))
      beerEditDom(toEditBeer, detailsDomElement)
    } else if (event.target.id === 'submit') {
      //All of this below should be abstracted to its own function.
      event.preventDefault()
      const id = parseInt(event.target.dataset.id)
      const name = document.getElementById('edit-beer-name').value
      const tagline = document.getElementById('edit-beer-tagline').value
      const description = document.getElementById('edit-beer-description').value
      const beer = Beer.findBeerById(parseInt(event.target.dataset.id))
      beer.name = name
      beer.tagline = tagline
      beer.description = description
      document.querySelector(`[data-id="${beer.id}"]`).innerHTML = beer.name
      beerInfoDom(beer, detailsDomElement)
      Adapter.updateBeer(beer)
    }

  }
}

function beerInfoDom(beer, detailDomElement) {
  detailDomElement.innerHTML = beer.render()
}

function beerEditDom(beer, detailDomElement) {
  detailDomElement.innerHTML = `<h1>Edit Beer</h1> ${beer.renderForm()}`
}
