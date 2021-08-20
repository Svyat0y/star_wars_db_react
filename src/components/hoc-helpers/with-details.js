import { Component } from 'react'
import PropTypes from 'prop-types'

import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner'


const withDetails = (View) => {
	return class extends Component {

		state = {
			item: null,
			image: null,
			loader: true,
			error: false
		}

		static propTypes = {
			getData: PropTypes.func.isRequired,
			itemId: PropTypes.string
		}

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
			const content = (item && !loader) && <View { ...this.props } data={ this.state }/>

			return (
				<>
					{ spinner }
					{ errorMessage }
					{ content }
				</>
			)
		}

	}
}

export default withDetails