import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyle from './styles/Global'
import { ThemeProvider } from 'styled-components'
import { Themes } from './styles/Theme'

import { CatalogoDeCores } from './pages/CatalogoDeCores'
//import { CreatePallete } from './pages/CreatePallete'
//import { Login } from './pages/Login'
//import { CadastrarUsuario } from './pages/CadastrarUsuario'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme = {Themes}>
			<GlobalStyle/>
			<CatalogoDeCores/>
		</ThemeProvider>
	</React.StrictMode>,
)
