import { Component } from 'react'

import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner'


const withDetails = (View, getData, getPersonImage) => {
	return class extends Component {

		state = {
			item: null,
			image: null,
			loader: true,
			error: false
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

		onError = () => {
			this.setState({
				error: true,
				loader: false
			})
		}

		updatePerson() {
			const { itemId } = this.props
			if (!itemId) {
				return
			}

			getData(itemId)
				.then((item) => {
					this.setState({
						item,
						loader: false,
						image: getPersonImage(item)
					})
				})
				.catch(this.onError)
		}

		render() {

			const { item, loader, error } = this.state

			const hasData = loader || error
			const hasNoItem = item || error

			const errorMessage = error && <ErrorIndicator/>
			const spinner = loader && <Spinner/>
			const noItem = !hasNoItem && <span>Select a person from a list</span>
			const content = !hasData && <View { ...this.props } data={ this.state }/>

			return (
				<>
					{ errorMessage }
					{ spinner }
					{ noItem }
					{ content }
				</>
			)
		}

	}
}

export default withDetails