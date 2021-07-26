import { Component } from 'react'
import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner'


const withDetails = (View, getData) => {
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
			const { itemId, getImage } = this.props
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
				.catch(this.onError)
		}

		render() {

			const { item, loader, error } = this.state

			const hasData = loader || error

			const errorMessage = error && <ErrorIndicator/>
			const spinner = loader && <Spinner/>
			const noItem = !item && <span>Select a person from a list</span>
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