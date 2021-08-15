import { SwapiServiceConsumer } from '../swapi-service-context'

const withSwapiService = (mapMethodsToProps) => (Wrapped) => {

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