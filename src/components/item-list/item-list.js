import './item-list.css'
import React from 'react';

const ItemList = ({ onItemSelected, data, children }) => {

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

export default ItemList