import { Component } from 'react'
import './app.css'

import Header from '../header'
import RandomPlanet from '../random-planet'
import PeoplePage from '../people-page/people-page'
import ItemList from '../item-list'
import ItemDetails, { Record } from '../item-details'
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
							getData={ this.apiService.getAllPlanets }>

							{ (i) =>
								<span>{ i.name }
									<span className='renderFnLabel'>(diameter: { i.diameter })</span>
								</span> }

						</ItemList>
					</div>
					<div className='col-md-6 item-details'>
						<ItemDetails
							itemId={ 5 }
							getData={ this.apiService.getPlanet }
							getImage={ this.apiService.getPlanetImage }>

							<Record field='diameter' label='diameter'/>
							<Record field='population' label='population'/>
							<Record field='rotationPeriod' label='rotationPeriod'/>

						</ItemDetails>
					</div>
				</div>

				<div className='row mb2'>
					<div className='col-md-6'>
						<ItemList
							onItemSelected={ this.onPersonSelected }
							getData={ this.apiService.getAllStarships }>

							{ (i) =>
								<span>{ i.name }
									<span className='renderFnLabel'>(model: { i.model })</span>
								</span> }

						</ItemList>
					</div>
					<div className='col-md-6 item-details'>
						<ItemDetails
							itemId={ 5 }
							getData={ this.apiService.getStarship }
							getImage={ this.apiService.getStarshipImage }>

							<Record field='model' label='model'/>
							<Record field='manufacturer' label='manufacturer'/>
							<Record field='crew' label='crew'/>
							<Record field='passengers' label='passengers'/>
							<Record field='length' label='length'/>
							<Record field='cargoCapacity' label='cargoCapacity'/>
							<Record field='costInCredits' label='costInCredits'/>

						</ItemDetails>
					</div>
				</div>

			</div>
		)
	}
}