import { Component } from 'react';

export default class ErrorBoundry extends Component {

	state = {
		hasError: false
	}

	componentDidCatch(error, errorInfo) {
		this.setState({ hasError: true })
	}

	render() {
		return this.props.children
	}
}