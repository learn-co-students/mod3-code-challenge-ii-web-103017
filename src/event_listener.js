class EventListener{
  static leftSide(){
    const leftSide = document.getElementById("list-group")
    leftSide.addEventListener("click", e => {
      const beer= Beer.all.find(x => x.id == e.target.id)
      // console.log(beerid);
      beer.renderRight()
      EventListener.descriptionListener();

    })
  }

  static descriptionListener() {
    const form = document.getElementById("description")
     form.addEventListener("submit", e => {
      e.preventDefault();
      const description = document.querySelector("textarea").value
      const id = document.querySelector("textarea").id
      console.log(id);
      console.log(description);
      Adapter.updateDescription(description, id)

    })
  }

}
