class EventListener {

  static clickBeer(){
    const list = document.querySelector('.list-group')
    list.addEventListener("click", e => {
      if (e.target.localName === "a") {
        const beer = Beer.all.find(x => x.name === e.target.innerText)
        const beerInfoDiv = document.querySelector('#beer-detail')
        beerInfoDiv.innerHTML = `
          <h2>${beer.name}</h2>
          <img src="${beer.image_url}">
          <h3>${beer.tagline}</h3>
          <form id="${beer.id}" class="beer-desc" action="index.html" method="post">
            <textarea name="beer-desc" rows="5" cols="30">${beer.description}</textarea>
            <br>
            <input type="submit" value="save">
          </form>
        `
      }
      EventListener.saveBeerDescription()
    })
  }

  static saveBeerDescription(){
    const save = document.querySelector("form")
    save.addEventListener("submit", e => {
      e.preventDefault()
      const description = document.querySelector("textarea").value
      const formId = document.querySelector("form").id
      const thisBeer = Beer.all.find(x => x.id === parseInt(formId))
      thisBeer.description = description
      Adapter.updateBeer(formId, description)
    })

  }


}
