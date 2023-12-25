import { Container } from './style'
import { BsHeartFill } from 'react-icons/bs'

export function Heart ({isFavorit, ...rest}){

	return(
		<Container className='heart'>
			<BsHeartFill {...rest}
				className={isFavorit === true ? 'isLiked' : ''}
			/>
		</Container>
	)
}