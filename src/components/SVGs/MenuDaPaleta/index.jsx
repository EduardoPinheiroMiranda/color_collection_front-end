import { Container } from './style'

export function MenuDaPaleta({...rest}){
	return(
		<Container {...rest}>
			<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="12" cy="5" r="3"/>
				<circle cx="12" cy="12" r="3"/>
				<circle cx="12" cy="19" r="3"/>
			</svg>
		</Container>
	)
}