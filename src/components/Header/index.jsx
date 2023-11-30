import { Container } from './style'

import { Search } from '../SVGs/Search'
import { Menu } from '../SVGs/Menu'

export function Header(){
	return(
		<Container>
			<div className="logo">
				<span>Color</span>
				<span>Collection</span>
			</div>
			
			<div className="search">
				<input type="text" />

				<Search/>

				<Menu/>
			</div>

		</Container>
	)
}