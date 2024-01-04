import { createBrowserRouter } from 'react-router-dom'

import { PaginaPrincipal } from '../pages/PaginaPrincipal'
import { CatalogoDeCores } from '../pages/CatalogoDeCores'
import { CreatePallete } from '../pages/CreatePallete'

import { CadastrarUsuario } from '../pages/CadastrarUsuario'
import { Login } from '../pages/Login'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <PaginaPrincipal/>,
		children: [
			{
				path: '/',
				element: <CatalogoDeCores/>
			},
			{
				path: '/creatPallete',
				element: <CreatePallete/>,
			},
			{
				path: '/login',
				element: <Login/>
			},
			{
				path: '/cadastro',
				element: <CadastrarUsuario/>
			}
		]
	}
	
])