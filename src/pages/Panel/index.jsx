import { Container } from './style'

import { Header } from '../../components/Header'
import { PalleteColor } from '../../components/PalleteColor'

import { collection } from '../../../db_teste'
import { MenuList } from '../../components/MenuList'

export function Panel(){
	return(
		<Container>
			<Header/>
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
			<MenuList/>
		</Container>
	)
}