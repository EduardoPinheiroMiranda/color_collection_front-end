import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyle from './styles/Global'
import { ThemeProvider } from 'styled-components'
import { Themes } from './styles/Theme'

//import { Panel } from './pages/Panel'
//import { CreatePallete } from './pages/CreatePallete'
import { Login } from './pages/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme = {Themes}>
			<GlobalStyle/>
			<Login/>
		</ThemeProvider>
	</React.StrictMode>,
)
