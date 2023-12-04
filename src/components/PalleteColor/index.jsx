import { BodyInfo, Colors, Container } from './style'
import { Copy } from '../SVGs/Copy'
import { Heart } from '../SVGs/Heart'


export function PalleteColor({/*id,*/projectName, type, favorit, colors}){
	
	function isLiked(){
		console.log('adicionado aos favoritos')
		
	}

	function copyColor(codColor){
		
		navigator.clipboard.writeText(codColor).then(()=> alert('dado copiado'))
	}

	return(
		<Container>
			
			<Colors className='palleteColors'>
				{
					colors.map(color => {
						return(
							<div 
								key={color} 
								className='color' 
								style={{background: color}}
							>
								<div 
									className='infoColor'
									onClick={() => {
										copyColor(color)
									}}
								>
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