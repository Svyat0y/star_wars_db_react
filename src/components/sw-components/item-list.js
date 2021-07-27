import withData from '../hoc-helpers/with-data'
import ItemList from '../item-list'

import SwapiService from '../../api/api'

const apiService = new SwapiService()
const {
	getAllPeople,
	getAllPlanets,
	getAllStarships
} = apiService

const PersonList = withData(ItemList, getAllPeople)
const PlanetList = withData(ItemList, getAllPlanets)
const StarshipList = withData(ItemList, getAllStarships)

export {
	PersonList,
	PlanetList,
	StarshipList
}