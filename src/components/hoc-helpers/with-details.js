import { Component } from 'react'

import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner'


const withDetails = (View) => {
	return class extends Component {

		state = {
			item: null,
			image: null,
			loader: false,
			error: false
		};

		componentDidMount() {
			this.updateItem()
		}

		componentDidUpdate(prevProps) {
			if (this.props.itemId !== prevProps.itemId) {
				this.updateItem()
				this.setState({ loader: true })
			}
		}

		onError = () => {
			this.setState({
				error: true,
				loader: false
			})
		}

		updateItem() {
			const { itemId } = this.props
			if (!itemId) {
				return
			}

			this.props.getData(itemId)
				.then((item) => {
					this.setState({
						item,
						loader: false,
						image: this.props.getPersonImage(item)
					})
				})
				.catch(this.onError)
		}

		render() {

			const { loader, error, item } = this.state

			const errorMessage = error && <ErrorIndicator/>
			const spinner = loader && <Spinner/>
			const content = item
				? <View { ...this.props } data={ this.state }/>
				: <span>select an item from the list</span>

			return (
				<>
					{ errorMessage }
					{ spinner }
					{ content }
				</>
			)
		}

	}
}

export default withDetails