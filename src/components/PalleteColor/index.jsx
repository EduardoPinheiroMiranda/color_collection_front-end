import { BodyInfo, Colors, Container } from './style'
import { Copy } from '../SVGs/Copy'
import { Heart } from '../SVGs/Heart'


export function PalleteColor({/*id,*/projectName, type, favorit, colors}){
	
	function isLiked(){
		console.log('adicionado aos favoritos')
		
	}

	return(
		<Container>
			
			<Colors className='palleteColors'>
				{
					colors.map(color => {
						return(
							<div key={color} className='color' style={{background: color}}>
								<div className='infoColor'>
									<span>{color}</span>
									<Copy/>
								</div>
							</div>
						)
					})
				}
			</Colors>

			<BodyInfo>
				<div className="description">
					<p>Projeto :<span>{projectName}</span></p>
					<p>Categoria :<span>{type}</span></p>
				</div>

				<Heart 
					isFavorit={favorit}
					onClick={isLiked}
				/>

			</BodyInfo>

		</Container>
	)
}