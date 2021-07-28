import { Component } from 'react'
import './people-page.css'

import ErrorBoundry from '../error-boundry'
import Row from '../row'
import { PersonDetails, PersonList } from '../sw-components'

export default class PeoplePage extends Component {

	state = {
		selectedPerson: 1
	}

	onPersonSelected = (id) => {
		this.setState({ selectedPerson: id })
	}

	render() {

		const itemList = <PersonList onItemSelected={ this.onPersonSelected }/>
		const itemDetails = <PersonDetails itemId={ this.state.selectedPerson }/>

		return (
			<ErrorBoundry>
				<Row left={ itemList } right={ itemDetails }/>
			</ErrorBoundry>
		)
	}
}