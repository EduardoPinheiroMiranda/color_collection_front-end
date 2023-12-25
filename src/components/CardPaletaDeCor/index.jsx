import {  Cores, Container, InformacoesDaPaleta } from './style'

import { Copy } from '../SVGs/Copy'
import { Heart } from '../SVGs/Heart'
import { Check } from '../SVGs/Check'
import { MenuDaPaleta } from '../SVGs/MenuDaPaleta'

export function CardPaletaDeCor({id, projectName, type, favorit, colors}){
	
	function isLiked(){
		console.log('adicionado aos favoritos')
		
	}

	function copyColor(id,codColor){

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
	
	function atualizarPaleta(){
		alert('atualizar')
	}

	function deletarPaleta(){
		alert('deletar')
	}

	function ativarMenuDaPaleta(){
		const menuDaPaleta = document.querySelector('.menuDaPaleta')
		menuDaPaleta.classList.toggle('ativarMenu')
		
	}

	return(
		<Container>
			
			<Cores className='palleteColors'>
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
			</Cores>

			<InformacoesDaPaleta>
				<div className="menuDaPaleta">
					<p onClick={atualizarPaleta}>Atualizar</p>
					<p onClick={deletarPaleta}>Deletar</p>
				</div>

				<div className="legenda">
					<div className="descricao">
						<p>Projeto :<span>{projectName}</span></p>
						<p>Categoria :<span>{type}</span></p>
					</div>

					<div className="elementosDeAcao">
						<Heart 
							isFavorit={favorit}
							onClick={isLiked}
						/>

						<MenuDaPaleta onClick={ativarMenuDaPaleta}/>
					</div>
				</div>

				

			</InformacoesDaPaleta>

		</Container>
	)
}