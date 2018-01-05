class Beer {
  constructor(data){
    this.id = data["id"];
    this.tagline = data["tagline"];
    this.name = data["name"];
    this.description = data["description"];
    this.image_url = data["image_url"];
    Beer.all.push(this);
  };

  static getById(id) {
    return Beer.all.find(x => x.id === id);
  };

};

Beer.all = []
