import { Search } from '../SVGs/Search'
import { Container, Header, NavBar, TagsElements } from './style'

export function CabecalhoLateral(){

	function selectSection(id){
		const sections = document.querySelectorAll('.selector')
		const links = document.querySelectorAll('.SelecionarSessao')
		
		sections.forEach((sectio) => {
			sectio.classList.remove('selectorOn')
		})
		sections[id].classList.add('selectorOn')


		links.forEach((link) => {
			link.classList.remove('colorLink')
		})
		links[id].classList.add('colorLink')
	}

	return(
		<Container id='menuFixed'>
			<Header>
				<h2>Color Colletion</h2>

				<div className="input">
					<input type="text" />
					<Search/>
				</div>
				
			</Header>
		
			<NavBar>
				<ul>
					<TagsElements>
						
						<div onClick={() => {selectSection(0)}}>
							<a className='SelecionarSessao'>Home</a>
						</div>
						<div className='selector'></div>

					</TagsElements>
					
					<TagsElements>
						
						<div onClick={() => {selectSection(1)}}>
							<a className='SelecionarSessao'>Favoritos</a>
						</div>
						<div className='selector'></div>

					</TagsElements>

					<TagsElements>
						
						<div onClick={() => {selectSection(2)}}>
							<a className='SelecionarSessao'>Análogas</a>
						</div>
						<div className='selector'></div>

					</TagsElements>
					<TagsElements>
						
						<div onClick={() => {selectSection(3)}}>
							<a className='SelecionarSessao'>Complementares</a>
						</div>
						<div className='selector'></div>

					</TagsElements>
					<TagsElements>
						
						<div onClick={() => {selectSection(4)}}>
							<a className='SelecionarSessao'>Compostas</a>
						</div>
						<div className='selector'></div>

					</TagsElements>
					<TagsElements>
						
						<div onClick={() => {selectSection(5)}}>
							<a className='SelecionarSessao'>Monocromáticas</a>
						</div>
						<div className='selector'></div>

					</TagsElements>
					<TagsElements>
						
						<div onClick={() => {selectSection(6)}}>
							<a className='SelecionarSessao'>Quadradas</a>
						</div>
						<div className='selector'></div>

					</TagsElements>
					<TagsElements>
						
						<div onClick={() => {selectSection(7)}}>
							<a className='SelecionarSessao'>Tríades</a>
						</div>
						<div className='selector'></div>

					</TagsElements>
					<TagsElements >
						
						<div onClick={() => {selectSection(8)}}>
							<a className='SelecionarSessao'>Personalizadas</a>
						</div>
						<div className='selector'></div>

					</TagsElements>

					<hr />

					<TagsElements>
						
						<div onClick={() => {selectSection(9)}}>
							<a className='SelecionarSessao'>Adicionar</a>
						</div>
						<div className='selector'></div>

					</TagsElements>

					<TagsElements>
						
						<div>
							<a className='SelecionarSessao'>Sair</a>
						</div>
						<div className='selector'></div>

					</TagsElements>


				</ul>
			</NavBar>
		</Container>
	)
}