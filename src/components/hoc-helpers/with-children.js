import ProTypes from 'prop-types'

const withChildrenFn = (fn) => (WrappedComponent) => {
	return (props) => {
		return (
			<WrappedComponent { ...props }>
				{ fn }
			</WrappedComponent>
		)
	}
}

withChildrenFn.propTypes = {
	fn: ProTypes.func.isRequired
}

export default withChildrenFn