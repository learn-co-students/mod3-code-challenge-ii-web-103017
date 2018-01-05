class Beer {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.tagline = data.tagline
    this.first_brewed = data.first_brewed
    this.description = data.description
    this.image_url = data.image_url
    this.food_pairing = [...data.food_pairing]
    this.brewers_tips = data.brewers_tips
    this.contributed_by = data.contributed_by

    Beer.all.push(this)
  }


} // END OF CLASS

Beer.all = []
