import { Component } from 'react'

import ErrorBoundry from '../error-boundry'
import Row from '../row'
import { PlanetDetails, PlanetList } from '../sw-components'

export default class PlanetsPage extends Component {

	state = {
		selectedItem: null
	}

	onItemSelected = (id) => {
		this.setState({ selectedItem: id })
	}

	render() {

		const planetList = <PlanetList onItemSelected={ this.onItemSelected }/>
		const planetDetails = <PlanetDetails itemId={ this.state.selectedItem }/>

		return (
			<ErrorBoundry>
				<Row left={ planetList } right={ planetDetails }/>
			</ErrorBoundry>
		)
	}
}