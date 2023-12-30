import { Route, Routes } from 'react-router-dom'

import { Cadastrarusuario } from '../pages/CadastrarUsuario'
import { Login } from '../pages/Login'

export function AutenticarUsuario(){
	<Routes>
		<Route path='/' element={<Login/>}/>
		<Route path='/cadastrar' element={<Cadastrarusuario/>}/>
	</Routes>
}