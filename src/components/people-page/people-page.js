import { Component } from 'react'
import './people-page.css'

import SwapiService from '../../api/api'
import ItemList from '../item-list'
import ItemDetails from '../item-details'
import ErrorBoundry from '../error-boundry'
import ErrorIndicator from '../error-indicator'
import Row from '../row'
import { Record } from '../item-details/item-details'

export default class PeoplePage extends Component {

	apiService = new SwapiService()

	state = {
		selectedPerson: 1
	}

	onPersonSelected = (id) => {
		this.setState({ selectedPerson: id })
	}

	render() {

		const { hasError } = this.state

		if (hasError) return <ErrorIndicator/>

		const itemList = (
			<ItemList
				onItemSelected={ this.onPersonSelected }
				getData={ this.apiService.getAllPeople }>

				{ (i) =>
					<span>{ i.name }
						<span className='renderFnLabel'>(birthYear: { i.birthYear })</span>
					</span> }
			</ItemList>
		)

		const itemDetails = (
			<ItemDetails
				itemId={ this.state.selectedPerson }
				getData={this.apiService.getPerson}
				getImage={this.apiService.getPersonImage}>

				<Record field='gender' label='gender'/>
				<Record field='birthYear' label='birthYear'/>
				<Record field='eyeColor' label='eyeColor'/>

			</ItemDetails>
		)

		return (
			<ErrorBoundry>
				<Row left={itemList} right={itemDetails}/>
			</ErrorBoundry>
		)
	}
}