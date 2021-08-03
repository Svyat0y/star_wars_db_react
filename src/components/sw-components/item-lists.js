import withData from '../hoc-helpers/with-data'
import ItemList from '../item-list'

import { withChildrenFn, withSwapiService } from '../hoc-helpers'


const renderForItemLists = (i, field) => {
	return (
		<span>{ i.name }
			<span className='renderFnLabel'>
			({ field }: { i[field] } )
		</span>
	</span>
	)
}

const renderPersonFn = (i) => renderForItemLists(i, 'birthYear')

const renderPlanetFn = (i) => renderForItemLists(i, 'population')

const renderStarshipFn = (i) => renderForItemLists(i, 'model')

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