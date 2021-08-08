import './item-list.css'
import PropTypes from 'prop-types'

const ItemList = ({ onItemSelected = () => {}, data, children }) => {

	const items = data.map(item => {
		const { id } = item

		return (
			<li className='list-group-item'
				key={ id }
				onClick={ () => onItemSelected(id) }>
				{ children(item) }
			</li>
		)
	})

	return (
		<ul className='item-list list-group'>
			{ items }
		</ul>
	)
}

ItemList.propTypes = {
	onItemSelected: PropTypes.func,
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	children: PropTypes.func.isRequired
}

export default ItemList