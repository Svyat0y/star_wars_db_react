import { SwapiServiceConsumer } from '../swapi-service-context'

const withSwapiService = (Wrapped, mapMethodsToProps) => {
	return (props) => (
		<SwapiServiceConsumer>
			{
				(apiService) => {
					const serviceProps = mapMethodsToProps(apiService)

					return (
						<Wrapped { ...props } { ...serviceProps }/>
					)
				}
			}
		</SwapiServiceConsumer>
	)
}

export default withSwapiService