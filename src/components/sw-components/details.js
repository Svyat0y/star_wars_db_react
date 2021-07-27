import withDetails from '../hoc-helpers/with-details'
import ItemDetails from '../item-details/item-details'
import SwapiService from '../../api'

const apiService = new SwapiService()
const {
	getPerson,
	getPlanet,
	getStarship,
	getPersonImage,
	getPlanetImage,
	getStarshipImage
} = apiService

const PersonDetails = withDetails(ItemDetails, getPerson, getPersonImage)
const PlanetDetails = withDetails(ItemDetails, getPlanet, getPlanetImage)
const StarshipDetails = withDetails(ItemDetails, getStarship, getStarshipImage)

export {
	PersonDetails,
	PlanetDetails,
	StarshipDetails
}