import { Container, Navbar, TagsElements } from './style'

export function MenuList(){

	function selectSection(id){
		const sections = document.querySelectorAll('.sections')
		const links = document.querySelectorAll('.link a')
		
		sections.forEach((sectio) => {
			sectio.classList.remove('selector')
		})
		sections[id].classList.add('selector')


		links.forEach((link) => {
			link.classList.remove('selectColor')
		})
		links[id].classList.add('selectColor')
	}

	
	return(
		<Container id='menuList'>
			
			<Navbar>
				<ul>
					<TagsElements>
						
						<div className='link' onClick={() => {selectSection(0)}}>
							<a >Home</a>
							<hr />
						</div>
						<div className='sections'></div>

					</TagsElements>
					<TagsElements>
						
						<div className='link' onClick={() => {selectSection(1)}}>
							<a >Adicionar</a>
							<hr />
						</div>
						<div className='sections'></div>

					</TagsElements>
					<TagsElements>
						
						<div className='link' onClick={() => {selectSection(2)}}>
							<a >Favoritos</a>
							<hr />
						</div>
						<div className='sections'></div>

					</TagsElements>
					<TagsElements>
						
						<div className='link' onClick={() => {selectSection(3)}}>
							<a >Categoria</a>
							<hr />
						</div>
						<div className='sections'></div>

					</TagsElements>
					<TagsElements>
						
						<div className='link' onClick={() => {selectSection(4)}}>
							<a >Analogas</a>
							<hr />
						</div>
						<div className='sections'></div>

					</TagsElements>
					<TagsElements>
						
						<div className='link' onClick={() => {selectSection(5)}}>
							<a >Monocromáticas</a>
							<hr />
						</div>
						<div className='sections'></div>

					</TagsElements>
					<TagsElements>
						
						<div className='link' onClick={() => {selectSection(6)}}>
							<a >Tríades</a>
							<hr />
						</div>
						<div className='sections'></div>

					</TagsElements>
					<TagsElements>
						
						<div className='link' onClick={() => {selectSection(7)}}>
							<a >Complementares</a>
							<hr />
						</div>
						<div className='sections'></div>

					</TagsElements>
					<TagsElements>
						
						<div className='link' onClick={() => {selectSection(8)}}>
							<a >Quadradas</a>
							<hr />
						</div>
						<div className='sections'></div>

					</TagsElements>
					<TagsElements>
						
						<div className='link' onClick={() => {selectSection(9)}}>
							<a >Compostas</a>
							<hr />
						</div>
						<div className='sections'></div>

					</TagsElements>
					<TagsElements >
						
						<div className='link' onClick={() => {selectSection(10)}}>
							<a >Personalizadas</a>
							<hr />
						</div>
						<div className='sections'></div>

					</TagsElements>


				</ul>
			</Navbar>

			<div className="blockedSection"></div>
		</Container>
	)
}