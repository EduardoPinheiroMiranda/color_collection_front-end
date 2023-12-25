import { Container } from './style'

import { Header } from '../../components/Header'
import { CardPaletaDeCor } from '../../components/CardPaletaDeCor'

import { collection } from '../../../db_teste'
import { MenuHidden } from '../../components/MenuHidden'
import { MenuFixed } from '../../components/MenuFixed'

export function CatalogoDeCores(){
	
	return(
		<Container>
			<Header/>
			<MenuFixed/>
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
							/>
						)
					})
				}
			</main>
			<MenuHidden/>
		</Container>
	)
}