import React from 'react'
import './item-details.css'
import PropTypes from 'prop-types'

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
						React.Children.map(children, (child) => {
							return React.cloneElement(child, { item })
						})
					}
				</ul>
			</div>
		</div>
	)
}

ItemDetails.propTypes = {
	data: PropTypes.object.isRequired,
	children: PropTypes.array.isRequired
}

export default ItemDetails