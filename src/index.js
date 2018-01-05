document.addEventListener('DOMContentLoaded', function() {

	//fetch dem beers
	Adapter.getBeers()
		.then(beers => beers.forEach(beer => new Beer(beer)))
		.then(beers => renderSidebar(Beer.all))

	//select dem dom elements
	const sidebar = document.getElementById("list-group")
	const beerDetail = document.getElementById("beer-detail")

	//add listeners
	sidebar.addEventListener("click", renderBeerDetail)
	beerDetail.addEventListener("click", updateBeerDetail)

	function renderSidebar(beers) {
		let beerNames = beers.map(beer => beer.renderBeerName()).join("")
		sidebar.innerHTML = beerNames
	}

	function renderBeerDetail() {
		let beerId = parseInt(event.target.dataset.id)
		let beer = Beer.all.find(beer => beer.id === beerId)
		let beerDescription = beer.renderBeerDescription()
		beerDetail.innerHTML = beerDescription
	}

	function updateBeerDetail() {
		event.preventDefault()

		if (event.target.id === "edit-beer") {
			let newDescription = document.getElementById("textarea").value
			let beerId = parseInt(document.getElementById("edit-beer").dataset.id)
			let updateBeer = Beer.all.find(beer => beer.id === beerId)

			fetch(`http://localhost:3000/beers/${beerId}`, {
				method: "PATCH",
				headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
				body: JSON.stringify({description: `${newDescription}`})
			})

			updateBeer.description = newDescription
			document.getElementById("textarea").innerHTML = newDescription

		}

	}

})
