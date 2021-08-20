import ErrorBoundry from '../error-boundry'
import { PlanetList } from '../sw-components'

const PlanetsPage = ({ history }) => {

	return (
		<ErrorBoundry>
			<PlanetList onItemSelected={ (itemId) => history.push(itemId) }/>
		</ErrorBoundry>
	)
}

export default PlanetsPage