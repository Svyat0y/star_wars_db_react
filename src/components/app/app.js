import { Component } from 'react'
import './app.css'

import Header from '../header'
import { PeoplesPage, PlanetsPage, StarshipsPage } from '../pages'
import RandomPlanet from '../random-planet'
import ErrorBoundry from '../error-boundry'
import SwapiService from '../../api'

import { SwapiServiceProvider } from '../swapi-service-context'

export default class App extends Component {

	apiService = new SwapiService()

	render() {
		return (
			<ErrorBoundry>
				<SwapiServiceProvider value={ this.apiService }>
					<div className='container'>

						<Header/>
						<RandomPlanet/>
						<PeoplesPage/>
						<PlanetsPage/>
						<StarshipsPage/>

					</div>
				</SwapiServiceProvider>
			</ErrorBoundry>
		)
	}
}