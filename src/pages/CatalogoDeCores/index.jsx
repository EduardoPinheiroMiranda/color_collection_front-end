import { Container } from './style'

import { CabecalhoDoTopo } from '../../components/CabecalhoDoTopo'
import { CardPaletaDeCor } from '../../components/CardPaletaDeCor'

import { collection } from '../../../db_teste'//banco de teste

import { MenuDoTopo } from '../../components/MenuDoTopo'
import { CabecalhoLateral } from '../../components/CabecalhoLateral'

export function CatalogoDeCores(){
	
	return(
		<Container>
			<CabecalhoDoTopo/>
			<CabecalhoLateral/>

			<main>
				{
					collection.map( pallete => {
						
						return(
							<CardPaletaDeCor 
								key={pallete.id}
								id={pallete.id}
								projectName={pallete.name}
								type={pallete.type}
								colors={pallete.colors}
								favorit={pallete.favorit}
								posicao={ collection.indexOf(pallete)}
							/>
						)
					})
				}
			</main>
			<MenuDoTopo/>
		</Container>
	)
}