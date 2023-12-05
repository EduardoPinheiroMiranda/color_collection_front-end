import { Container, Navbar, TagsElements } from './style'

export function MenuHidden(){

	function selectSection(id){
		const selectors = document.querySelectorAll('.selectorOff')
		const links = document.querySelectorAll('.linktoMenuHidden')
		
		selectors.forEach((selector) => {
			selector.classList.remove('selector')
		})
		selectors[id].classList.add('selector')


		links.forEach((link) => {
			link.classList.remove('colorLink')
		})
		links[id].classList.add('colorLink')
		
	}

	
	return(
		<Container id='menuHidden'>
			
			<Navbar>
				<ul>
					<TagsElements>
						
						<div onClick={() => {selectSection(0)}}>
							<a className='linktoMenuHidden' href='#' >Home</a>
						</div>
						<div className='selectorOff'></div>

					</TagsElements>
					<TagsElements>
						
						<div onClick={() => {selectSection(1)}}>
							<a className='linktoMenuHidden' href='#' >Adicionar</a>
						</div>
						<div className='selectorOff'></div>

					</TagsElements>
					<TagsElements>
						
						<div onClick={() => {selectSection(2)}}>
							<a className='linktoMenuHidden' href='#' >Favoritos</a>
						</div>
						<div className='selectorOff'></div>

					</TagsElements>
					<TagsElements>
						
						<div onClick={() => {selectSection(3)}}>
							<a className='linktoMenuHidden' href='#' >Categoria</a>
						</div>
						<div className='selectorOff'></div>

					</TagsElements>
					<TagsElements>
						
						<div onClick={() => {selectSection(4)}}>
							<a className='linktoMenuHidden' href='#' >Analogas</a>
						</div>
						<div className='selectorOff'></div>

					</TagsElements>
					<TagsElements>
						
						<div onClick={() => {selectSection(5)}}>
							<a className='linktoMenuHidden' href='#' >Monocromáticas</a>
						</div>
						<div className='selectorOff'></div>

					</TagsElements>
					<TagsElements>
						
						<div onClick={() => {selectSection(6)}}>
							<a className='linktoMenuHidden' href='#' >Tríades</a>
						</div>
						<div className='selectorOff'></div>

					</TagsElements>
					<TagsElements>
						
						<div onClick={() => {selectSection(7)}}>
							<a className='linktoMenuHidden' href='#' >Complementares</a>
						</div>
						<div className='selectorOff'></div>

					</TagsElements>
					<TagsElements>
						
						<div onClick={() => {selectSection(8)}}>
							<a className='linktoMenuHidden' href='#' >Quadradas</a>
						</div>
						<div className='selectorOff'></div>

					</TagsElements>
					<TagsElements>
						
						<div onClick={() => {selectSection(9)}}>
							<a className='linktoMenuHidden' href='#' >Compostas</a>
						</div>
						<div className='selectorOff'></div>

					</TagsElements>
					<TagsElements >
						
						<div onClick={() => {selectSection(10)}}>
							<a className='linktoMenuHidden' href='#'>Personalizadas</a>
						</div>
						<div className='selectorOff'></div>

					</TagsElements>


				</ul>
			</Navbar>

			<div className="blockedSection"></div>
		</Container>
	)
}