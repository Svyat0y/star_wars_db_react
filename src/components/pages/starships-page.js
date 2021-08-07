import { Component } from 'react'

import ErrorBoundry from '../error-boundry'
import Row from '../row'
import { StarshipDetails, StarshipList } from '../sw-components'

export default class StarshipsPage extends Component {

	state = {
		selectedItem: null
	}

	onItemSelected = (id) => {
		this.setState({ selectedItem: id })
	}

	render() {

		const starshipList = <StarshipList onItemSelected={ this.onItemSelected }/>
		const starshipDetails = <StarshipDetails itemId={ this.state.selectedItem }/>

		return (
			<ErrorBoundry>
				<Row left={ starshipList } right={ starshipDetails }/>
			</ErrorBoundry>
		)
	}
}