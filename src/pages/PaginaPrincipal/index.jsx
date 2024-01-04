import { Container } from './style'
import { Outlet } from 'react-router-dom'

import { CabecalhoDoTopo } from '../../components/CabecalhoDoTopo'

import { MenuLateral } from '../../components/MenuLateral'
import { CabecalhoLateral } from '../../components/CabecalhoLateral'

export function PaginaPrincipal(){
	
	return(
		<Container id='catalogoDeCores'>
			<CabecalhoDoTopo/>
			<CabecalhoLateral/>

			<Outlet/>
			
			<MenuLateral/>
		</Container>
	)
}