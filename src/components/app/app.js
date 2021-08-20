import { Component } from 'react'
import './app.css'

import Header from '../header'
import { PeoplesPage, PlanetsPage, StarshipsPage } from '../pages'
import RandomPlanet from '../random-planet'
import ErrorBoundry from '../error-boundry'
import SwapiService from '../../api'
import { PersonDetails, PlanetDetails, StarshipDetails } from '../sw-components'

import { SwapiServiceProvider } from '../swapi-service-context'
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom'


export default class App extends Component {

	apiService = new SwapiService()

	render() {
		return (
			<ErrorBoundry>
				<SwapiServiceProvider value={ this.apiService }>
					<HashRouter>
						<div className='container'>
							<Header/>
							<RandomPlanet/>

							<Switch>
								<Route exact path='/' render={ () => <h2 className='welcome-title'>Welcome to Star Wars DB</h2> }/>
								<Route exact path='/people' component={ PeoplesPage }/>
								<Route exact path='/planets' component={ PlanetsPage }/>
								<Route exact path='/starships' component={ StarshipsPage }/>
								<Route path='/people/:id' render={
									({ match }) => {
										const { id } = match.params
										return <PersonDetails itemId={ id }/>
									} }/>
								<Route path='/planets/:id' render={
									({ match }) => {
										const { id } = match.params
										return <PlanetDetails itemId={ id }/>
									} }/>
								<Route path='/starships/:id' render={
									({ match }) => {
										const { id } = match.params
										return <StarshipDetails itemId={ id }/>
									} }/>
								<Route render={ () => <h2 className='pageNotFount-title'>Page not found</h2> }/>
							</Switch>

						</div>
					</HashRouter>
				</SwapiServiceProvider>
			</ErrorBoundry>
		)
	}
}