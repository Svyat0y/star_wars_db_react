import { Component } from 'react'
import './people-page.css'

import ErrorBoundry from '../error-boundry'
import Row from '../row'
import { PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList } from '../sw-components'

export default class PeoplePage extends Component {

	state = {
		selectedPerson: 5
	}

	onPersonSelected = (id) => {
		this.setState({ selectedPerson: id })
	}

	render() {

		const personList = <PersonList onItemSelected={ this.onPersonSelected }/>
		// const planetList = <PlanetList onItemSelected={ this.onPersonSelected }/>
		// const starshipList = <StarshipList onItemSelected={ this.onPersonSelected }/>
		const personDetails = <PersonDetails itemId={ this.state.selectedPerson }/>
		// const planetDetails = <PlanetDetails itemId={ this.state.selectedPerson }/>
		// const starshipDetails = <StarshipDetails itemId={ this.state.selectedPerson }/>

		return (
			<ErrorBoundry>
				<Row left={ personList } right={ personDetails }/>
				{/*<Row left={ planetList } right={ planetDetails }/>*
				{/*<Row left={ starshipList } right={ starshipDetails }/>*/ }
			</ErrorBoundry>
		)
	}
}