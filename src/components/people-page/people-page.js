import { Component } from 'react'
import './people-page.css'

import ErrorBoundry from '../error-boundry'
import Row from '../row'
import { StarshipDetails, StarshipList } from '../sw-components'

export default class PeoplePage extends Component {

	state = {
		selectedPerson: 5
	}

	onPersonSelected = (id) => {
		this.setState({ selectedPerson: id })
	}

	render() {

		const itemList = <StarshipList onItemSelected={ this.onPersonSelected }/>
		const itemDetails = <StarshipDetails itemId={ this.state.selectedPerson }/>

		return (
			<ErrorBoundry>
				<Row left={ itemList } right={ itemDetails }/>
			</ErrorBoundry>
		)
	}
}