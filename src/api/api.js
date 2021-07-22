export default class SwapiService {

	_baseUrl = 'https://swapi.dev/api'

	async getResource(url) {
		const response = await fetch(`${ this._baseUrl }${ url }`)

		if (!response.ok) {
			throw new Error(`Could not fetch ${ url }` + `, received ${ response.status }`)
		}
		return await response.json()
	}

	getAllPeople() {
		return this.getResource(`/people/`).then(body => body.results)
	}

	getPerson(id) {
		return this.getResource(`/people/${id}/`)
	}

	getAllStarships() {
		return this.getResource(`/http https://swapi.dev/api/starships/`)
	}

	getStarship(id) {
		return this.getResource(`/http https://swapi.dev/api/starships/${id}/`)
	}

	getAllPlanets() {
		return this.getResource(`/http https://swapi.dev/api/planets/`)
	}

	getPlanet(id) {
		return this.getResource(`http https://swapi.dev/api/planets/${id}`)
	}
}