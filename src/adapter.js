class Adapter {
	static getBeers() {
		return fetch("http://localhost:3000/beers").then(resp => resp.json())
	}
}
