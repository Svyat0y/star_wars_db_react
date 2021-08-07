const compose = (...funcs) => (comp) => {
	return funcs.reduceRight((previousValue, fn) => fn(previousValue), comp)
}

export default compose