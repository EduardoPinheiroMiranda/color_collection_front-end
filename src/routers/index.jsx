import { BrowserRouter } from 'react-router-dom'

import { AppRouters } from './app.routers'


export function Routers(){
	return(
		<BrowserRouter basename='/app'>
			<AppRouters/> 
		</BrowserRouter>
	)
}