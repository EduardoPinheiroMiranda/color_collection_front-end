import { BodyInfo, Colors, Container } from './style'
import { Copy } from '../SVGs/Copy'
import { Heart } from '../SVGs/Heart'



const colors = ['#1FD6FF','#1F48FF','#1E90FF','#1FFFDF','#3D1FFF']


export function PalleteColor(/*{projectName, type, description, ...rest}*/){

	return(
		<Container>
			
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
					<p>Projeto :<span> Bilhete Premiado</span></p>
					<p>Categoria :<span> Análoga</span></p>
				</div>

				<Heart/>

			</BodyInfo>

		</Container>
	)
}