import { Component } from 'react'
import './people-page.css'

import { Record } from '../item-details'
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

		const itemList = (
			<PersonList
				onItemSelected={ this.onPersonSelected }>

				{ (i) =>
					<span>{ i.name }
						<span className='renderFnLabel'>(birthYear: { i.birthYear })</span>
					</span> }
			</PersonList>
		)

		const itemDetails = (
			<PersonDetails
				itemId={ this.state.selectedPerson }>

				<Record field='gender' label='gender'/>
				<Record field='birthYear' label='birthYear'/>
				<Record field='eyeColor' label='eyeColor'/>

			</PersonDetails>
		)

		return (
			<ErrorBoundry>
				<Row left={ itemList } right={ itemDetails }/>
			</ErrorBoundry>
		)
	}
}