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

const childrenForPersonDetails = [
	<Record key='gender' field='gender' label='gender'/>,
	<Record key='birthYear' field='birthYear' label='birthYear'/>,
	<Record key='eyeColor' field='eyeColor' label='eyeColor'/>
]

const childrenForPlanetDetails = [
	<Record key='diameter' field='diameter' label='diameter'/>,
	<Record key='population' field='population' label='population'/>,
	<Record key='rotationPeriod' field='rotationPeriod' label='rotationPeriod'/>
]

const childrenForStarshipDetails = [
	<Record key='model' field='model' label='model'/>,
	<Record key='manufacturer' field='manufacturer' label='manufacturer'/>,
	<Record key='crew' field='crew' label='crew'/>,
	<Record key='passengers' field='passengers' label='passengers'/>,
	<Record key='costInCredits' field='costInCredits' label='costInCredits'/>
]

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