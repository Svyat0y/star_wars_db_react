import withDetails from '../hoc-helpers/with-details'
import ItemDetails from '../item-details/item-details'

import { withChildrenFn, withSwapiService } from '../hoc-helpers'

const Record = ({ item, field, label }) => {
	return (
		<li className="list-group-item">
			<span className="term">{ label + ':' }</span>
			<span>{ item[field] }</span>
		</li>
	)
}

const childrenForPersonDetails = (item) => {
	return (
		<>
			<Record item={ item } field='gender' label='gender'/>
			<Record item={ item } field='birthYear' label='birthYear'/>
			<Record item={ item } field='eyeColor' label='eyeColor'/>
		</>
	)
}

const childrenForPlanetDetails = (item) => {
	return (
		<>
			<Record item={ item } field='diameter' label='diameter'/>
			<Record item={ item } field='population' label='population'/>
			<Record item={ item } field='rotationPeriod' label='rotationPeriod'/>
		</>
	)
}

const childrenForStarshipDetails = (item) => {
	return (
		<>
			<Record item={ item } field='model' label='model'/>
			<Record item={ item } field='manufacturer' label='manufacturer'/>
			<Record item={ item } field='crew' label='crew'/>
			<Record item={ item } field='passengers' label='passengers'/>
			<Record item={ item } field='costInCredits' label='costInCredits'/>
		</>
	)
}

const mapPersonMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getPerson,
		getPersonImage: swapiService.getPersonImage
	}
}

const mapPlanetMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getPlanet,
		getPersonImage: swapiService.getPlanetImage
	}
}

const mapStarshipMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getStarship,
		getPersonImage: swapiService.getStarshipImage
	}
}


const PersonDetails = withSwapiService(withDetails(withChildrenFn(ItemDetails, childrenForPersonDetails)), mapPersonMethodsToProps)

const PlanetDetails = withSwapiService(withDetails(withChildrenFn(ItemDetails, childrenForPlanetDetails)), mapPlanetMethodsToProps)

const StarshipDetails = withSwapiService(withDetails(withChildrenFn(ItemDetails, childrenForStarshipDetails)), mapStarshipMethodsToProps)

export {
	PersonDetails,
	PlanetDetails,
	StarshipDetails
}