import { Container, InfoPallet, CodPallet } from './style'

import { Header } from '../../components/Header'
import { Question } from '../../components/SVGs/Question'
// import { MenuFixed } from '../../components/MenuFixed'
// import { MenuHidden } from '../../components/MenuHidden'

export function CreatePallete (){
	return(
		<Container>
			<Header/>
			<main>
				<InfoPallet>
					<h2>Criar paleta de cores</h2>
					<div className='categore'>
						<select id='type'>
							<option value='personalizadas'>personalizadas</option>
							<option value='analogas'>análogas</option>
							<option value='complementares'>complementares</option>
							<option value='compostas'>compostas</option>
							<option value='monocromaticas'>monocromaticas</option>
							<option value='quadradas'>quadradas</option>
							<option value='triades'>triades</option>
						</select>
						<span >Tipo da paleta</span>
					</div>

					<div className='name'>
						<input id='name' type='text' />
						<label htmlFor='name'>Nome da paleta</label>
					</div>
					
				</InfoPallet>

				<CodPallet>
					<div className="header">
						<h2>Adicionar cores</h2>
						<Question/>
					</div>

					<div className="pallet">
						<div className="card">
							<input type="text" placeholder='#ffffff'/>
						</div>
						<div className="card">
							<input type="text" placeholder='#ffffff'/>
						</div>
						<div className="card">
							<input type="text" placeholder='#ffffff'/>
						</div>
						<div className="card">
							<input type="text" placeholder='#ffffff'/>
						</div>
						<div className="card">
							<input type="text" placeholder='#ffffff'/>
						</div>
					</div>
				</CodPallet>

				<button>Salvar</button>
				
			</main>
		</Container>
	)
}