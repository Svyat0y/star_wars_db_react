import { Component } from 'react'

import ErrorBoundry from '../error-boundry'
import Row from '../row'
import { PersonDetails, PersonList } from '../sw-components'

export default class PeoplesPage extends Component {

	state = {
		selectedItem: null
	}

	onItemSelected = (id) => {
		this.setState({ selectedItem: id })
	}

	render() {

		const personList = <PersonList onItemSelected={ this.onItemSelected }/>
		const personDetails = <PersonDetails itemId={ this.state.selectedItem }/>

		return (
			<ErrorBoundry>
				<Row left={ personList } right={ personDetails }/>
			</ErrorBoundry>
		)
	}
}