import { Component } from 'react'

import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

const withData = (View) => {
	return class extends Component {

		state = {
			data: null,
			error: false,
			loader: true
		}

		onError = () => {
			this.setState({
				error: true,
				loader: false
			})
		}

		componentDidMount() {
			this.props.getData()
				.then(data => {
					this.setState({
						data,
						loader: false
					})
				})
				.catch(this.onError)
		}

		render() {

			const { data, error, loader } = this.state

			const hasData = data && !error

			const errorMessage = error && <ErrorIndicator/>
			const spinner = loader && <Spinner/>
			const content = hasData && <View { ...this.props } data={ data }/>

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

export default withData