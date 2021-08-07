const withChildrenFn = (fn) => (WrappedComponent) => {
	return (props) => {
		return (
			<WrappedComponent { ...props }>
				{ fn }
			</WrappedComponent>
		)
	}
}

export default withChildrenFn