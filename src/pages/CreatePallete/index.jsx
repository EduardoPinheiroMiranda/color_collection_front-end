import { InfoPallet, CodPallet, Container } from './style'

import { Question } from '../../components/SVGs/Question'

const novaPaletaDeCor = [
	{
		nome: '',
		categoria: '',
		paletaDeCor: ['', '', '', '', '']
	}
]

export function CreatePallete (){

	function showColor(position){
		const cards = document.querySelectorAll('.card')
		const inputs = document.querySelectorAll('.card input')

		let hexadecimalColor= inputs[position].value
		const colorCard = cards[position]


		function invalidValue(){

			novaPaletaDeCor[0].paletaDeCor[position] = ''
			colorCard.setAttribute('style', `background-color: ${({ theme }) => theme.colors.colorFomt1}`)
			inputs[position].setAttribute('style', `background-color: ${novaPaletaDeCor[0].paletaDeCor[position]}`)
		}


		try{

			if(hexadecimalColor[0] !== '#' && hexadecimalColor.length >= 1){
				inputs[position].value = '#' + hexadecimalColor
			}


			const checkTheConstruction = hexadecimalColor.split('')
			checkTheConstruction.forEach((element) => {
				if(element > 'f'){
					invalidValue()
					return
				}
			})


			if(hexadecimalColor.length == 4 || hexadecimalColor.length == 7){
				novaPaletaDeCor[0].paletaDeCor[position] = hexadecimalColor
			}


			if(hexadecimalColor.length > 7 || hexadecimalColor.length == 0){
				invalidValue()
				return
			}

			colorCard.setAttribute(
				'style', 
				`background-color: ${novaPaletaDeCor[0].paletaDeCor[position]}; 
				 border-color: ${novaPaletaDeCor[0].paletaDeCor[position]}`
			)

			inputs[position].setAttribute('style', `background-color: ${novaPaletaDeCor[0].paletaDeCor[position]}`)

			
		}catch(erro){
			console.log(erro)
		}

	}

	function saveDate(){
		//const categoryPalletColor = document.querySelector('select')
		const namePalletColor = document.querySelector('#name')

		try{

			if(namePalletColor.value.length <= 4){
				alert('erro')
			}

		}catch(erro){
			console.log(erro)
		}
	}

	return(
		<Container>

			<main>
				<InfoPallet>
					<h2>Criar paleta de cores</h2>
					<div className='categore'>
						<select id='type'>
							<option value='personalizada'>personalizada</option>
							<option value='analoga'>análoga</option>
							<option value='complementar'>complementar</option>
							<option value='composta'>composta</option>
							<option value='monocromatica'>monocromatica</option>
							<option value='quadrada'>quadrada</option>
							<option value='triade'>triade</option>
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
							<input 
								type="text" 
								placeholder='#ffffff'
								onChange={()=>{
									showColor(0)
								}} 
							/>
						</div>
						<div className="card">
							<input 
								type="text" 
								placeholder='#ffffff'
								onChange={()=>{
									showColor(1)
								}} 
							/>
						</div>
						<div className="card">
							<input 
								type="text" 
								placeholder='#ffffff'
								onChange={()=>{
									showColor(2)
								}} 
							/>
						</div>
						<div className="card">
							<input 
								type="text" 
								placeholder='#ffffff'
								onChange={()=>{
									showColor(3)
								}} 
							/>
						</div>
						<div className="card">
							<input 
								type="text" 
								placeholder='#ffffff'
								onChange={()=>{
									showColor(4)
								}} 
							/>
						</div>
					</div>
				</CodPallet>

				<button
					onClick={saveDate}
				>Salvar</button>
				
			</main>
		</Container>
	)
}
