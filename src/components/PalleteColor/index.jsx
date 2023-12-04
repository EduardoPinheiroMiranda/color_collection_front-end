import { BodyInfo, Colors, Container } from './style'
import { Copy } from '../SVGs/Copy'
import { Heart } from '../SVGs/Heart'
import { Check } from '../SVGs/Check'

export function PalleteColor({id, projectName, type, favorit, colors}){
	
	function isLiked(){
		console.log('adicionado aos favoritos')
		
	}

	function copyColor(id,codColor){
		//const idSelector = JSON.stringify('info'+codColor+id)

		navigator.clipboard.writeText('#'+codColor).then( () => {
			const infoColor = document.querySelector(`#info${codColor}${id}`)
			infoColor.querySelector('#copy').classList.add('hide')
			infoColor.querySelector('#check').classList.remove('hide')

			setTimeout( () => {
				infoColor.querySelector('#copy').classList.remove('hide')
				infoColor.querySelector('#check').classList.add('hide')
			},1500)
		})
		
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
								style={{background: `#${color}`}}
							>
								<div 
									id={'info'+color+id}
									className= 'infoColor '
									onClick={() => {
										copyColor(id,color)
									}}
								>
									<span>#{color}</span>
									<Copy/>
									<Check className='hide'/>
									
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