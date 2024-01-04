
import { CardPaletaDeCor } from '../../components/CardPaletaDeCor'

import { collection } from '../../../db_teste'//banco de teste

export function CatalogoDeCores(){
	
	return(
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
	)
}