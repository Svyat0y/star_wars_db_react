export default class SwapiService {

	_baseUrl = 'https://swapi.dev/api'

	async getResource(url) {
		const response = await fetch(`${ this._baseUrl }${ url }`)

		if (!response.ok) {
			throw new Error(`Could not fetch ${ url }` + `, received ${ response.status }`)
		}
		return await response.json()
	}

	async getAllPeople() {
		return await this.getResource(`/people/`).then(persons => persons.results.map(this._transformPerson))
	}

	async getPerson(id) {
		return await this.getResource(`/people/${id}/`).then(person => this._transformPerson(person))
	}

	async getAllStarships() {
		return await this.getResource(`/starships/`).then(starships => starships.results.map(this._transformStarship))
	}

	async getStarship(id) {
		return await this.getResource(`/starships/${id}/`).then(starship => this._transformStarship(starship))
	}

	async getAllPlanets() {
		return await this.getResource(`/planets/`).then(planets => planets.results.map(this._transformPlanet))
	}

	async getPlanet(id) {
		return await this.getResource(`/planets/${id}`).then(planet => this._transformPlanet(planet))
	}

	_extractId(item) {
		const idRegExp = /\/([0-9]*)\/$/
		return item.url.match(idRegExp)[1]
	}

	_transformPlanet(planet) {
		return {
			id: this._extractId(planet),
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter
		}
	}

	_transformStarship(starship) {
		return {
			id: this._extractId(starship),
			name: starship.name,
			model: starship.model,
			manufacturer: starship.manufacturer,
			costInCredits: starship.costInCredits,
			length: starship.length,
			crew:starship.crew,
			passengers: starship.passengers,
			cargoCapacity: starship.cargoCapacity
		}
	}

	_transformPerson(person) {
		return {
			id: this._extractId(person),
			name: person.name,
			gender: person.gender,
			birthYear: person.birthYear,
			eyeColor: person.eyeColor
		}
	}
}