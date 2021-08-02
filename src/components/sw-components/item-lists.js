import withData from '../hoc-helpers/with-data'
import ItemList from '../item-list'

import { withSwapiService } from '../hoc-helpers'

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

const renderPlanetFn = (i) =>
	<span>{ i.name }
		<span className='renderFnLabel'>(population: { i.population })</span>
		</span>

const renderStarshipFn = (i) =>
	<span>{ i.name }
		<span className='renderFnLabel'>(model: { i.model })</span>
		</span>

const mapPersonMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getAllPeople
	}
}

const mapPlanetMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getAllPlanets
	}
}

const mapStarshipMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getAllStarships
	}
}

const PersonList = withSwapiService(withData(withChildrenFn(ItemList, renderPersonFn)), mapPersonMethodsToProps)

const PlanetList = withSwapiService(withData(withChildrenFn(ItemList, renderPlanetFn)), mapPlanetMethodsToProps)

const StarshipList = withSwapiService(withData(withChildrenFn(ItemList, renderStarshipFn)), mapStarshipMethodsToProps)

export {
	PersonList,
	PlanetList,
	StarshipList
}