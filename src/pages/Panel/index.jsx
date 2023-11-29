import { Container } from './style'

import { Header } from '../../components/Header'
import { PalleteColor } from '../../components/PalleteColor'

export function Panel(){
	return(
		<Container>
			<Header/>
			<main>
				<PalleteColor/>
				<PalleteColor/>
				<PalleteColor/>
				<PalleteColor/>
				<PalleteColor/>
				<PalleteColor/>
				<PalleteColor/>

			</main>
		</Container>
	)
}