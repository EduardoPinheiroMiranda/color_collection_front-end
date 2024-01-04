import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/Global'

import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Themes } from './styles/Theme'

// import { CatalogoDeCores } from './pages/CatalogoDeCores'
// import { CreatePallete } from './pages/CreatePallete'
// import { Login } from './pages/Login'
// import { CadastrarUsuario } from './pages/CadastrarUsuario'

import { router } from './routers'
// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <CatalogoDeCores/>
// 	},
// 	{
// 		path: '/createPallete',
// 		element: <CreatePallete/>,
// 	},
// 	{
// 		path: '/login',
// 		element: <Login/>
// 	},
// 	{
// 		path: '/cadastro',
// 		element: <CadastrarUsuario/>
// 	}
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme = {Themes}>
			<GlobalStyle/>
			<RouterProvider router={router}/>
		</ThemeProvider>
	</React.StrictMode>,
)
