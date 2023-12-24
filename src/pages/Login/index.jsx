import { Container, DadosDeLogin } from './style'

import { UserLogin } from '../../components/SVGs/UserLogin'
import { UserPassword } from '../../components/SVGs/UserPassword'
import { NotificarErro } from '../../components/NotificarErro'
import { OcultarSenha } from '../../components/SVGs/OcultarSenha'
import { ExibirSenha } from '../../components/SVGs/ExibirSenha'

const mensagemsDeErro = [
	'Erro: dados incompletos ou invalidos',
	'Erro: email invalido ',
	'Erro: usuário ou senha incorretos'
]

export function Login(){

	function exibirSenha(acao){
		const exibir = document.querySelector('#exibirSenha')
		const ocultar = document.querySelector('#ocultarSenha')
		const tipoDoInput = document.querySelector('#password')

		switch(acao){
		case 'exibir':
			exibir.setAttribute('style', 'display: none;')
			ocultar.setAttribute('style', 'display: block')
			tipoDoInput.setAttribute('type', 'text')
			break

		case 'ocultar':
			exibir.setAttribute('style', 'display: block;')
			ocultar.setAttribute('style', 'display: none')
			tipoDoInput.setAttribute('type', 'password')
			break
		}
	}

	function fazerLogin(){
		const notificarErro = document.querySelector('#notificarErro')

		const emailDoUsuario = document.querySelector('#email').value
		const senhaDoUsuario = document.querySelector('#password').value

		const userTest = 'pinheiomiranda@gmail.com'
		const senhaTest = '1234'

		function ativarNotificarErro(erro){
			notificarErro.classList.add('NotificarErroAtiva')
			notificarErro.querySelector('p').textContent = mensagemsDeErro[erro]

			setTimeout(() => {
				notificarErro.classList.remove('NotificarErroAtiva')
			}, 3000)
		}

		if(emailDoUsuario.length == 0 || senhaDoUsuario.length == 0){//verifica se os capos estão vazios
			ativarNotificarErro(0)
			return
		}

		if(!emailDoUsuario.includes('@')){ //verifica o emal
			ativarNotificarErro(1)
			return
		}

		if(senhaDoUsuario !== senhaTest && emailDoUsuario !== userTest){
			ativarNotificarErro(2)
			return
		}

		alert('logado')
		
	}

	return(
		<Container>
			<main>
				<h1>Color Collection</h1>
				<p>Entrar</p>

				<form>
					<DadosDeLogin >
						<div className="dadoDeLogin">
							<div className="icon">
								<UserLogin/>
							</div>
						
							<input type='text' id='email' placeholder='Email'/>
						</div>
						
					</DadosDeLogin>

					<DadosDeLogin >
						<div className="dadoDeLogin">
							<div className="icon">
								<UserPassword/>
							</div>
						
							<input type='password' id='password' placeholder='Senha'/>
							
							<div className="exibirSenha">
								<ExibirSenha onClick={() => {
									exibirSenha('exibir')
								}}/>
								<OcultarSenha onClick={() => {
									exibirSenha('ocultar')
								}}/>
							</div>
							
						</div>
						
						<NotificarErro mensage={mensagemsDeErro[0]}/>

					</DadosDeLogin>

					<div className="redefinirSenha">
						<a href="#">Esqueci a senha</a>
					</div>
					
					<div className="acessarConta">
						<button 
							onClick={(event) => {
								event.preventDefault()
								fazerLogin()
							}}
						>
							Entar
						</button>

					</div>

					<div className="cadastrar">
						<a href="#">Criar conta</a>
					</div>

				</form>
			</main>
		</Container>
	)
}