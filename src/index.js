document.addEventListener('DOMContentLoaded', function(event) {

  //A cleaner way to organize this would be to create a seperate App class on load. But this below works!
  const beerNames = document.getElementById("list-group")
  const beerDetail = document.getElementById("beer-detail")


  beerNames.addEventListener('click', nameClickHandler(beerDetail))
  beerDetail.addEventListener('click', detailsHandler(beerDetail))

  Adapter.fetchBeers().then(json => {
    json.map(beerObj => {
      const fetchedBeer = new Beer(beerObj)
      showBeerName(fetchedBeer, beerNames)
    })
  })
})
