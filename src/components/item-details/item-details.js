import React, { Component } from 'react'
import './person-details.css'

import Spinner from '../spinner'

const Record = ({item, field, label }) => {
	return (
		<li className="list-group-item">
			<span className="term">{ label }</span>
			<span>{ item[field] }</span>
		</li>
	)
}

export {
	Record
}

export default class ItemDetails extends Component {

	state = {
		item: null,
		image: null,
		loader: true
	};

	componentDidMount() {
		this.updatePerson()
	}

	componentDidUpdate(prevProps) {
		if (this.props.itemId !== prevProps.itemId) {
			this.updatePerson()
			this.setState({ loader: true })
		}
	}

	updatePerson() {
		const { itemId, getData, getImage } = this.props
		if (!itemId) {
			return
		}

		getData(itemId)
			.then((item) => {
				this.setState({
					item,
					loader: false,
					image: getImage(item)
				})
			})
	}

	render() {

		const { item, loader, image } = this.state

		if (!item) {
			return <span>Select a person from a list</span>
		}

		if (loader) return <Spinner/>

		const { name, gender, birthYear, eyeColor } = item

		return (
			<div className="person-details card">
				<img className="person-image"
					 src={ image }
					 alt="character"/>

				<div className="card-body">
					<h4>{ name }</h4>
					<ul className="list-group list-group-flush">
						{
							React.Children.map(this.props.children, (child) => {
								return React.cloneElement(child, {item})
							})
						}
					</ul>
				</div>
			</div>
		)
	}
}
