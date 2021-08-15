import { Component } from 'react'
import PropTypes from 'prop-types'

import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

const withData = (View) => {
	return class extends Component {

		state = {
			data: null,
			error: false,
			loader: true
		}

		static propTypes = {
			getData: PropTypes.func.isRequired
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