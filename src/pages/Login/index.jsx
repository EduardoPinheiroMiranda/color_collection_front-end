import { Container, DadosDeLogin } from './style'

import { UserLogin } from '../../components/SVGs/UserLogin'
import { UserPassword } from '../../components/SVGs/UserPassword'
import { NotificarErro } from '../../components/NotificarErro'

export function Login(){

	function fazerLogin(){
		const notificarErro = document.querySelector('#notificarErro')

		const emailDoUsuario = document.querySelector('#email').value
		const senhaDoUsuario = document.querySelector('#password').value

		function ativarNotificarErro(){
			notificarErro.classList.add('NotificarErroAtiva')

			setTimeout(() => {
				notificarErro.classList.remove('NotificarErroAtiva')
			}, 3000)
		}

		if(emailDoUsuario.length == 0 || senhaDoUsuario.length == 0){
			ativarNotificarErro()
			return
		}

			


		
	}

	return(
		<Container>
			<main>
				<h1>Color Collection</h1>
				<p>Entrar</p>

				<form>
					<DadosDeLogin >
						<div className="senhaDoUsuario">
							<div className="icon">
								<UserLogin/>
							</div>
						
							<input type='text' id='email' placeholder='Email'/>
						</div>
						
					</DadosDeLogin>

					<DadosDeLogin >
						<div className="senhaDoUsuario">
							<div className="icon">
								<UserPassword/>
							</div>
						
							<input type='password' id='password' placeholder='Senha'/>
						</div>
						
						<NotificarErro mensage='Dados invalidos ou incompletos'/>

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