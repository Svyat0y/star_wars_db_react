import withData from '../hoc-helpers/with-data'
import ItemList from '../item-list'

import SwapiService from '../../api/api'

const apiService = new SwapiService()
const {
	getAllPeople,
	getAllPlanets,
	getAllStarships
} = apiService

const withChildrenFn = (WrappedComponent, fn) => {
	return (props) => {
		return (
			<WrappedComponent { ...props }>
				{ fn }
			</WrappedComponent>
		)
	}
}

const renderPersonFn = (i) =>
	<span>{ i.name }
		<span className='renderFnLabel'>(birthYear: { i.birthYear })</span>
		</span>

const PersonList = withData(
	withChildrenFn(ItemList, renderPersonFn),
	getAllPeople)

const PlanetList = withData(
	ItemList,
	getAllPlanets)

const StarshipList = withData(
	ItemList,
	getAllStarships)

export {
	PersonList,
	PlanetList,
	StarshipList
}