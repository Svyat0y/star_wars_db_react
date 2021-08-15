export default class SwapiService {

	_baseUrl = 'https://swapi.dev/api'
	_baseImage = 'https://starwars-visualguide.com/assets/img'

	getResource = async (url) => {
		const response = await fetch(`${ this._baseUrl }${ url }`)

		if (!response.ok) {
			throw new Error(`Could not fetch ${ url }` + `, received ${ response.status }`)
		}

		return await response.json()
	}

	getAllPeople = async () => {
		return await this.getResource(`/people/`).then(persons => persons.results.map(this._transformPerson))
	}

	getPerson = async (id) => {
		return await this.getResource(`/people/${ id }/`).then(person => this._transformPerson(person))
	}

	getAllStarships = async () => {
		return await this.getResource(`/starships/`).then(starships => starships.results.map(this._transformStarship))
	}

	getStarship = async (id) => {
		return await this.getResource(`/starships/${ id }/`).then(starship => this._transformStarship(starship))
	}

	getAllPlanets = async () => {
		return await this.getResource(`/planets/`).then(planets => planets.results.map(this._transformPlanet))
	}

	getPlanet = async (id) => {
		return await this.getResource(`/planets/${ id }`).then(planet => this._transformPlanet(planet))
	}

	getPersonImage = ({ id }) => {
		return `${ this._baseImage }/characters/${ id }.jpg`
	}

	getPlanetImage = ({ id }) => {
		return `${ this._baseImage }/planets/${ id }.jpg`
	}

	getStarshipImage = ({ id }) => {
		return `${ this._baseImage }/starships/${ id }.jpg`
	}


	_extractId(item) {
		const idRegExp = /\/([0-9]*)\/$/
		return item.url.match(idRegExp)[1]
	}

	_transformPlanet = (planet) => {
		return {
			id: this._extractId(planet),
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter
		}
	}

	_transformStarship = (starship) => {
		return {
			id: this._extractId(starship),
			name: starship.name,
			model: starship.model,
			manufacturer: starship.manufacturer,
			costInCredits: starship.cost_in_credits,
			length: starship.length,
			crew: starship.crew,
			passengers: starship.passengers,
			cargoCapacity: starship.cargo_capacity
		}
	}

	_transformPerson = (person) => {
		return {
			id: this._extractId(person),
			name: person.name,
			gender: person.gender,
			birthYear: person.birth_year,
			eyeColor: person.eye_color
		}
	}
}