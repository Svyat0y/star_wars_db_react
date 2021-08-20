import ErrorBoundry from '../error-boundry'
import { PersonList } from '../sw-components'

const PeoplesPage = ({ history }) => {

	return (
		<ErrorBoundry>
			<PersonList onItemSelected={ (itemId) => history.push(itemId) }/>
		</ErrorBoundry>
	)
}

export default PeoplesPage