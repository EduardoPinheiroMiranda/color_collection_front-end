import { Container } from './style'

import { Search } from '../SVGs/Search'

export function Header(){
	return(
		<Container>
			<div className="logo">
				<span>Color</span>
				<span>Collection</span>
			</div>
			
			<input type="text" />

			<Search/>

		</Container>
	)
}