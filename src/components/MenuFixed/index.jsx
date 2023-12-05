import { Search } from '../SVGs/Search'
import { Container, Header, NavBar, TagsElements } from './style'

export function MenuFixed (){

	function selectSection(id){
		const sections = document.querySelectorAll('.selector')
		const links = document.querySelectorAll('.linkToMeneFixed')
		
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
							<a className='linkToMeneFixed'>Home</a>
						</div>
						<div className='selector'></div>

					</TagsElements>
					<TagsElements>
						
						<div onClick={() => {selectSection(1)}}>
							<a className='linkToMeneFixed'>Adicionar</a>
						</div>
						<div className='selector'></div>

					</TagsElements>
					<TagsElements>
						
						<div onClick={() => {selectSection(2)}}>
							<a className='linkToMeneFixed'>Favoritos</a>
						</div>
						<div className='selector'></div>

					</TagsElements>
					<TagsElements>
						
						<div onClick={() => {selectSection(3)}}>
							<a className='linkToMeneFixed'>Categoria</a>
						</div>
						<div className='selector'></div>

					</TagsElements>
					<TagsElements>
						
						<div onClick={() => {selectSection(4)}}>
							<a className='linkToMeneFixed'>Analogas</a>
						</div>
						<div className='selector'></div>

					</TagsElements>
					<TagsElements>
						
						<div onClick={() => {selectSection(5)}}>
							<a className='linkToMeneFixed'>Monocromáticas</a>
						</div>
						<div className='selector'></div>

					</TagsElements>
					<TagsElements>
						
						<div onClick={() => {selectSection(6)}}>
							<a className='linkToMeneFixed'>Tríades</a>
						</div>
						<div className='selector'></div>

					</TagsElements>
					<TagsElements>
						
						<div onClick={() => {selectSection(7)}}>
							<a className='linkToMeneFixed'>Complementares</a>
						</div>
						<div className='selector'></div>

					</TagsElements>
					<TagsElements>
						
						<div onClick={() => {selectSection(8)}}>
							<a className='linkToMeneFixed'>Quadradas</a>
						</div>
						<div className='selector'></div>

					</TagsElements>
					<TagsElements>
						
						<div onClick={() => {selectSection(9)}}>
							<a className='linkToMeneFixed'>Compostas</a>
						</div>
						<div className='selector'></div>

					</TagsElements>
					<TagsElements >
						
						<div onClick={() => {selectSection(10)}}>
							<a className='linkToMeneFixed'>Personalizadas</a>
						</div>
						<div className='selector'></div>

					</TagsElements>


				</ul>
			</NavBar>
		</Container>
	)
}