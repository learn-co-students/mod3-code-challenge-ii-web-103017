class Beer {
  constructor (data) {
    this.id = data.id;
    this.name = data.name;
    this.tagline = data.tagline;
    this.first_brewed = data.first_brewed;
    this.description = data.description;
    this.url = data.image_url;
    this.food_pairing = data.food_pairing;
    this.tips = data.brewers_tips;
    this.contributed = data.contributed_by;
    Beer.all.push(this);

  }

  render() {
    const leftSide = document.getElementById("list-group")
    leftSide.innerHTML += `<li id="${this.id}">${this.name}</li>`
  }

  renderRight(){
    const rightSide = document.getElementById("beer-detail")
    // console.log(this.name);
    rightSide.innerHTML = `<h3>${this.name}</h3>
                           <h4>${this.tagline}</h4>
                           <p>${this.first_brewed}</p>
                           <img src="${this.url}" alt="">
                           <form id="description" action="index.html" method="post">
                           <textarea id="${this.id}">${this.description}</textarea>
                           <input type="submit" value="Save">
                           </form>
                           <p>${this.food_pairing}</p>
                           <p>${this.tips}</p>
                           <p>${this.contributed}</p>


    `
  }

}
Beer.all = [];


// "id": 1,
//     "name": "Buzz",
//     "tagline": "A Real Bitter Experience.",
//     "first_brewed": "09/2007",
//     "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
//     "image_url": "https://images.punkapi.com/v2/keg.png",
//     "food_pairing": [
//       "Spicy chicken tikka masala",
//       "Grilled chicken quesadilla",
//       "Caramel toffee cake"
//     ],
//     "brewers_tips": "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.",
//     "contributed_by": "Sam Mason <samjbmason>"
