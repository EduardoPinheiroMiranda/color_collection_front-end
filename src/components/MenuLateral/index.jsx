import { Container, Navbar, TagsElements } from './style'
import { Link } from 'react-router-dom'

export function MenuLateral(){

	function selectSection(id){
		const selectors = document.querySelectorAll('.selectorOff')
		const links = document.querySelectorAll('.selecionarSessao_MenuDoTopo')
		
		function restStyle(elements, clase){

			elements.forEach((element) => {
				element.classList.remove(clase)
			})
		}

		restStyle(selectors, 'selectorOn')
		restStyle(links, 'colorLink')

		
		selectors[id].classList.add('selectorOn')
		links[id].classList.add('colorLink')
		
	}

	
	return(
		<Container id='menuDoTopo'>
			
			<Navbar>
				<ul>
					<TagsElements>
						
						<div onClick={() => {selectSection(0)}}>
							<Link className='selecionarSessao_MenuDoTopo' to='/'>Home</Link>
						</div>
						<div className='selectorOff'></div>

					</TagsElements>

					<TagsElements>
						
						<div onClick={() => {selectSection(1)}}>
							<a className='selecionarSessao_MenuDoTopo' href='#' >Favoritos</a>
						</div>
						<div className='selectorOff'></div>

					</TagsElements>

					<TagsElements>
						
						<div onClick={() => {selectSection(2)}}>
							<a className='selecionarSessao_MenuDoTopo' href='#' >Análogas</a>
						</div>
						<div className='selectorOff'></div>

					</TagsElements>

					<TagsElements>
						
						<div onClick={() => {selectSection(3)}}>
							<a className='selecionarSessao_MenuDoTopo' href='#' >Complementares</a>
						</div>
						<div className='selectorOff'></div>

					</TagsElements>

					<TagsElements>
						
						<div onClick={() => {selectSection(4)}}>
							<a className='selecionarSessao_MenuDoTopo' href='#' >Compostas</a>
						</div>
						<div className='selectorOff'></div>

					</TagsElements>

					<TagsElements>
						
						<div onClick={() => {selectSection(5)}}>
							<a className='selecionarSessao_MenuDoTopo' href='#' >Monocromáticas</a>
						</div>
						<div className='selectorOff'></div>

					</TagsElements>

					<TagsElements>
						
						<div onClick={() => {selectSection(6)}}>
							<a className='selecionarSessao_MenuDoTopo' href='#' >Quadradas</a>
						</div>
						<div className='selectorOff'></div>

					</TagsElements>

					<TagsElements>
						
						<div onClick={() => {selectSection(7)}}>
							<a className='selecionarSessao_MenuDoTopo' href='#' >Tríades</a>
						</div>
						<div className='selectorOff'></div>

					</TagsElements>

					<TagsElements>
						
						<div onClick={() => {selectSection(8)}}>
							<a className='selecionarSessao_MenuDoTopo' href='#' >Pesrsonalizadas</a>
						</div>
						<div className='selectorOff'></div>

					</TagsElements>

					<hr />

					<TagsElements>
						
						<div onClick={() => {selectSection(9)}}>
							<Link 
								className='selecionarSessao_MenuDoTopo'
								to="/creatPallete"
							>
								Adicionar
							</Link>
						</div>
						<div className='selectorOff'></div>

					</TagsElements>

					<TagsElements >
						
						<div >
							<a className='selecionarSessao_MenuDoTopo' href='#'>Sair</a>
						</div>
						<div className='selectorOff'></div>

					</TagsElements>


				</ul>
			</Navbar>

			<div className="blockedSection"></div>
		</Container>
	)
}