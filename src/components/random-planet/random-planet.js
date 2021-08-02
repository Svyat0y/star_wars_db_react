import { Component } from 'react'
import './random-planet.css'

import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

import SwapiService from '../../api/api'

export default class RandomPlanet extends Component {

	apiService = new SwapiService()

	state = {
		planet: {},
		loader: true,
		error: false
	}

	componentDidMount() {
		this.interval = setInterval(() => this.updatePlanet(), 6000)
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	onError = () => {
		this.setState({
			error: true,
			loader: false
		})
	}

	updatePlanet() {
		const id = Math.floor(Math.random() * 19) + 2
		this.apiService.getPlanet(id)
			.then(planet => {
				this.setState({ planet, loader: false })
			})
			.catch(this.onError)
	}

	render() {

		const { planet, loader, error } = this.state

		const hasData = loader || error

		const errorMessage = error && <ErrorIndicator/>
		const spinner = loader && <Spinner/>
		const content = !hasData && <PlanetView planet={ planet }/>

		return (
			<div className='random-planet jumbotron rounded'>
				{ errorMessage }
				{ spinner }
				{ content }
			</div>
		)
	}
}

const PlanetView = ({ planet }) => {

	const { id, name, population, rotationPeriod, diameter } = planet

	return (
		<>
			<img className='planet-image'
				 src={ `https://starwars-visualguide.com/assets/img/planets/${ id }.jpg` } alt='planet'/>
			<div>
				<h4>{ name }</h4>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						<span className='term'>Population</span>
						<span>{ population }</span>
					</li>
					<li className='list-group-item'>
						<span className='term'>Rotation Period</span>
						<span>{ rotationPeriod }</span>
					</li>
					<li className='list-group-item'>
						<span className='term'>Diameter</span>
						<span>{ diameter }</span>
					</li>
				</ul>
			</div>
		</>
	)
}