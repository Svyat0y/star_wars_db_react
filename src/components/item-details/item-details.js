import React from 'react'
import './item-details.css'

const ItemDetails = ({ data, children }) => {

	const { item, image } = data

	return (
		<div className="person-details card">
			<img className="person-image"
				 src={ image }
				 alt="character"/>

			<div className="card-body">
				<h4>{ item.name }</h4>
				<ul className="list-group list-group-flush">
					{
						children(item)
					}
				</ul>
			</div>
		</div>
	)
}

export default ItemDetails