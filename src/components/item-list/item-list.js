import './item-list.css'

import SwapiService from '../../api/api'
import withData from '../hoc-helpers'

const ItemList = ({onItemSelected, data, children}) => {

	const renderItems = (arr) => {
		return arr.map(item => {
			const { id } = item
			const label = children(item)

			return (
				<li className='list-group-item'
					key={ id }
					onClick={ () => onItemSelected(id) }>
					{ label }
				</li>
			)
		})
	}

	const items = renderItems(data)

	return (
		<ul className='item-list list-group'>
			{ items }
		</ul>
	)
}

const {getAllPeople} = new SwapiService()

export default withData(ItemList, getAllPeople)