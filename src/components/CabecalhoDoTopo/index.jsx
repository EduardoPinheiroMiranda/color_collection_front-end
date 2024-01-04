import { Container } from './style'

import { Search } from '../SVGs/Search'
import { Menu } from '../SVGs/Menu'

export function CabecalhoDoTopo(){

	function openMenu(){
		const menuList = document.querySelector('#menuDoTopo')
		const menuIcon = document.querySelector('#menu svg')
		const blockedSection = document.querySelector('.blockedSection')
		const main = document.querySelector('main')

		menuList.classList.toggle('closeMenu')
		menuIcon.classList.toggle('menuOn')

		blockedSection.classList.toggle('blockedSectionOn')

		main.classList.toggle('fixarMenu')
	}

	return(
		<Container id='header'>
			<div className="logo">
				<span>Color</span>
				<span>Collection</span>
			</div>
			
			<div className="search">
				<input type="text" />

				<Search/>

				<Menu onClick={openMenu}/>
			</div>

		</Container>
	)
}