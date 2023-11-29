import { BodyInfo, BodyPallete, Colors, Container } from './style'
import { Arrow } from '../SVGs/Arrow'
import { Copy } from '../SVGs/Copy'



const colors = ['#f20000','#1F1919','#42FF00','#100BFF','#BACA08']




export function PalleteColor(/*{projectName, type, description, ...rest}*/){

	return(
		<Container>
			<div className="titleProject">
				<h2>Rifa online</h2>
				<Arrow/>
			</div>
			
			<BodyPallete>

				<Colors className='palleteColors'>
					{
						colors.map(color => {
							return(
								<div key={color} className='color' style={{background: color}}>
									<div className='infoColor'>
										<span>{color}</span>
										<Copy/>
									</div>
								</div>
							)
						})
					}
				</Colors>

				<BodyInfo>
					<div className="description">
						<p>Informações</p> 
						<Arrow/>
					</div>
					<section>
						<p>Projeto:</p>
						<p>Tipo da palheta:</p>
						<p>Descrição:</p>
					</section>
	
				</BodyInfo>

			</BodyPallete>

		</Container>
	)
}