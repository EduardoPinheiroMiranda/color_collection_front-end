import { Container } from './style'

import { Header } from '../../components/Header'
import { PalleteColor } from '../../components/PalleteColor'

import { collection } from '../../../db_teste'
import { MenuHidden } from '../../components/MenuHidden'
import { MenuFixed } from '../../components/MenuFixed'

export function Panel(){
	
	return(
		<Container>
			<Header/>
			<MenuFixed/>
			<main>
				{
					collection.map( pallete => {

						return(
							<PalleteColor 
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