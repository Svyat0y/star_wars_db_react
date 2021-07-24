import { Component } from 'react'
import './people-page.css'

import ItemList from '../item-list'
import PersonDetails from '../person-details'
import ErrorIndicator from '../error-indicator'
import SwapiService from '../../api/api'

export default class PeoplePage extends Component {

	apiService = new SwapiService()

	state = {
		selectedPerson: 1,
		hasError: false
	}

	onPersonSelected = (id) => {
		this.setState({ selectedPerson: id })
	}

	componentDidCatch(error, errorInfo) {
		this.setState({ hasError: true })
	}

	render() {

		const { hasError } = this.state

		if (hasError) return <ErrorIndicator/>

		return (
			<div className='row mb2'>
				<div className='col-md-6'>
					<ItemList
						onItemSelected={ this.onPersonSelected }
						getData={ this.apiService.getAllPeople }
						renderItem={ ({ name, gender, birthYear }) =>
							<span>{ name }
								<span style={ { color: '#007A5C' } }> (gender: { gender }, birthYear: { birthYear })</span>
							</span> }/>
				</div>
				<div className='col-md-6 item-details'>
					<PersonDetails personId={ this.state.selectedPerson }/>
				</div>
			</div>
		)
	}
}