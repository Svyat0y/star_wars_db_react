import { Component } from 'react'
import './app.css'

import Header from '../header'
import RandomPlanet from '../random-planet'
import PeoplePage from '../people-page/people-page'

import SwapiService from '../../api'

export default class App extends Component {

	apiService = new SwapiService()

	state = {}

	render() {
		return (
			<div className='container'>

				<Header/>
				<RandomPlanet/>
				<PeoplePage/>

			</div>
		)
	}
}