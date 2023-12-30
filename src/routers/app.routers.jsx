import { Route, Routes } from 'react-router-dom'

import { CatalogoDeCores } from '../pages/CatalogoDeCores'
import { CreatePallete } from '../pages/CreatePallete'

export function AppRouters(){
	<Routes>
		<Route path="/" element={<CatalogoDeCores/>}/>
		<Route path='/createPallete' element={<CreatePallete/>}/>
	</Routes>
}