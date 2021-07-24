import { Component } from 'react'
import './app.css'

import Header from '../header'
import RandomPlanet from '../random-planet'
import PeoplePage from '../people-page/people-page'
import ItemList from '../item-list'
import PersonDetails from '../person-details'
import SwapiService from '../../api/api'

export default class App extends Component {

	apiService = new SwapiService()

	state = {}

	render() {
		return (
			<div className='container'>
				<Header/>
				<RandomPlanet/>
				<PeoplePage/>

				<div className='row mb2'>
					<div className='col-md-6'>
						<ItemList
							onItemSelected={ this.onPersonSelected }
							getData={ this.apiService.getAllPlanets }
							renderItem={ ({ name, diameter }) =>
								<span>{ name }
									<span style={ { color: '#007A5C' } }> (diameter: { diameter })</span>
								</span> }/>
					</div>
					<div className='col-md-6 item-details'>
						<PersonDetails personId={ this.state.selectedPerson }/>
					</div>
				</div>

				<div className='row mb2'>
					<div className='col-md-6'>
						<ItemList
							onItemSelected={ this.onPersonSelected }
							getData={ this.apiService.getAllStarships }
							renderItem={ ({ name, model }) =>
								<span>{ name }
									<span style={ { color: '#007A5C' } }> (model: { model })</span>
								</span> }/>
					</div>
					<div className='col-md-6 item-details'>
						<PersonDetails personId={ this.state.selectedPerson }/>
					</div>
				</div>

			</div>
		)
	}
}