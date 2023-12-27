import {  Cores, Container, InformacoesDaPaleta } from './style'

import { Copy } from '../SVGs/Copy'
import { Heart } from '../SVGs/Heart'
import { Check } from '../SVGs/Check'
import { MenuDaPaleta } from '../SVGs/MenuDaPaleta'


export function CardPaletaDeCor({id, projectName, type, favorit, colors, posicao}){

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

	function ativarMenuDaPaleta(posicaoDaPaleta){
		const menusDasPaletas = document.querySelectorAll('.opcoesDoMenu')

		menusDasPaletas.forEach((menuDaPaleta) => {
			if(menusDasPaletas[posicaoDaPaleta] !== menuDaPaleta){
				menuDaPaleta.classList.remove('ativarMenu')
			}
			
		})

		menusDasPaletas[posicaoDaPaleta].classList.toggle('ativarMenu')
		//console.log(posicao)

	}

	return(
		<Container className={projectName}>
			
			<Cores>
				{
					colors.map(color => {
						return(
							<div 
								key={id + color} 
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
				<div className="opcoesDoMenu">
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

						<MenuDaPaleta onClick={() => {
							ativarMenuDaPaleta(posicao)
						}}/>
					</div>
				</div>

				

			</InformacoesDaPaleta>

		</Container>
	)
}