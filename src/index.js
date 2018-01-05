function updateBeer(desc, beerID) {
  return fetch(`http://localhost:3000/beers/${beerID}`, {
    method: 'PATCH',
    body: JSON.stringify({description: `${desc}`}),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
}

document.addEventListener('DOMContentLoaded', function(event) {

  fetch('http://localhost:3000/beers').then(response => response.json()).then(function(data) {
    let ul = document.getElementById('list-group')
    data.forEach(function(beer) {

      let li = document.createElement('li');
      li.innerText = beer.name
      li.setAttribute('id', beer.id)
      ul.appendChild(li);
    })
  })

  document.getElementById('list-group').addEventListener('click', function(event) {
    const beerID = Number(event.target.id)
    fetch(`http://localhost:3000/beers/${beerID}`).then(response => response.json()).then(function(beer) {
      document.getElementById("beer-detail").innerHTML =
      `<h1>${beer.name}</h1>
      <img src="${beer.image_url}">
      <h3>${beer.tagline}</h3>
      <textarea>${beer.description}</textarea>
      <button id="edit-beer" class="btn btn-info">
        Save
      </button>`
    });
  })

  document.getElementById('beer-detail').addEventListener('click', function(event) {
    let beerID = null;
    const desc = event.target.parentElement.children[3].value;
    const beers = document.getElementById('list-group').children;

    if (event.target.id === 'edit-beer') {
      const beer_name = event.target.parentElement.children[0].innerText;

      for (beer of beers) {
        if (beer.innerText === beer_name) {
          beerID = Number(beer.id)
          updateBeer(desc, beerID)
        }
      }

    }


    // document.getElementById('beer-detail').childNodes[6].textContent
  })


})
