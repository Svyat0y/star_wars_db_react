import PropTypes from 'prop-types'

import withData from '../hoc-helpers/with-data'
import ItemList from '../item-list'

import { compose, withChildrenFn, withSwapiService } from '../hoc-helpers'


const renderForItemLists = (i, field) => {
	return (
		<span>{ i.name }
			<span className='renderFnLabel'>
			({ field }: { i[field] } )
		</span>
	</span>
	)
}

renderForItemLists.propTypes = {
	i: PropTypes.object.isRequired,
	field: PropTypes.string.isRequired
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

const PersonList = compose(
	withSwapiService(mapPersonMethodsToProps),
	withData,
	withChildrenFn(renderPersonFn)
)(ItemList)

const PlanetList = compose(
	withSwapiService(mapPlanetMethodsToProps),
	withData,
	withChildrenFn(renderPlanetFn)
)(ItemList)

const StarshipList = compose(
	withSwapiService(mapStarshipMethodsToProps),
	withData,
	withChildrenFn(renderStarshipFn)
)(ItemList)

export {
	PersonList,
	PlanetList,
	StarshipList
}