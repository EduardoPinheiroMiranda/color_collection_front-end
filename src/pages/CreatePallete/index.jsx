import { Container } from './style'

import { Header } from '../../components/Header'
// import { MenuFixed } from '../../components/MenuFixed'
import { MenuHidden } from '../../components/MenuHidden'

export function CreatePallete (){
	return(
		<Container>
			<Header/>
			<MenuHidden/>
		</Container>
	)
}