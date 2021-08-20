import ErrorBoundry from '../error-boundry'

import { StarshipList } from '../sw-components'
import { withRouter } from 'react-router-dom'

const StarshipsPage = ({ history }) => {

	return (
		<ErrorBoundry>
			<StarshipList onItemSelected={ (itemId) => {history.push(itemId) } }/>
		</ErrorBoundry>
	)
}

export default withRouter(StarshipsPage)