import { Container } from './style'
import { IoIosCheckmarkCircleOutline} from 'react-icons/io'

export function Check ({...rest}){
	return(
		<Container id='check' {...rest}>
			<IoIosCheckmarkCircleOutline/>
		</Container>
	)
}