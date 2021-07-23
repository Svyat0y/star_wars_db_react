import './app.css'
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

const App = () => {
	return (
		<div className='container'>
			<Header/>
			<RandomPlanet/>

			<div className='row mb2'>
				<div className='col-md-6'>
					<ItemList/>
				</div>
				<div className='col-md-6'>
					<PersonDetails/>
				</div>
			</div>
		</div>
	)
}

export default App