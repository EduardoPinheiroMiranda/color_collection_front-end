import { Container } from './style'

export function NotificarErro({mensage}){
	return(
		<Container id='notificarErro'>
			<p>{mensage}</p>
		</Container>
	)
}