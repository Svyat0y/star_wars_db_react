import withDetails from '../hoc-helpers/with-details'
import ItemDetails from '../item-details/item-details'
import SwapiService from '../../api'

const Record = ({ item, field, label }) => {
	return (
		<li className="list-group-item">
			<span className="term">{ label }</span>
			<span>{ item[field] }</span>
		</li>
	)
}

const apiService = new SwapiService()
const {
	getPerson,
	getPlanet,
	getStarship,
	getPersonImage,
	getPlanetImage,
	getStarshipImage
} = apiService

const childrenForPersonDetails = () => {
	return (
		<>
			<Record field='gender' label='gender'/>
			<Record field='birthYear' label='birthYear'/>
			<Record field='eyeColor' label='eyeColor'/>
		</>
	)
}

const withChildrenFn = (WrappedComponent, fn) => {
	return (props) => {
		return (
			<WrappedComponent { ...props }>
				{ fn }
			</WrappedComponent>
		)

	}
}

const PersonDetails = withDetails(
	withChildrenFn(ItemDetails, childrenForPersonDetails),
	getPerson, getPersonImage)

const PlanetDetails = withDetails(
	ItemDetails, getPlanet, getPlanetImage)

const StarshipDetails = withDetails(
	ItemDetails, getStarship, getStarshipImage)

export {
	PersonDetails,
	PlanetDetails,
	StarshipDetails
}