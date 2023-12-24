import { Container, DadosDeLogin } from './style'

import { UserLogin } from '../../components/SVGs/UserLogin'
import { UserPassword } from '../../components/SVGs/UserPassword'
import { NotificarErro } from '../../components/NotificarErro'
import { OcultarSenha } from '../../components/SVGs/OcultarSenha'
import { ExibirSenha } from '../../components/SVGs/ExibirSenha'
import { Email } from '../../components/SVGs/Email'

const mensagemsDeErro = [
	'Erro: dados incompletos ou invalidos',
	'Erro: email invalido ',
	'As senhas são diferentes'
]

export function CadastrarUsuario(){

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


	function cadastrarUsuario(){
		const notificarErro = document.querySelector('#notificarErro')

		const nomeDoUsuario = document.querySelector('#name').value
		const emailDoUsuario = document.querySelector('#email').value
		const senhaDoUsuario = document.querySelector('#newpassword').value
		const confirmarSenha = document.querySelector('#confirmpassword').value

		function ativarNotificarErro(erro){
			notificarErro.classList.add('NotificarErroAtiva')
			notificarErro.querySelector('p').textContent = mensagemsDeErro[erro]

			setTimeout(() => {
				notificarErro.classList.remove('NotificarErroAtiva')
			}, 3000)
		}

		if(emailDoUsuario.length == 0 || senhaDoUsuario.length == 0 ||
			nomeDoUsuario.length == 0 || confirmarSenha.length == 0){//verifica se os capos estão vazios
			ativarNotificarErro(0)
			return
		}

		if(!emailDoUsuario.includes('@')){ //verifica o emal
			ativarNotificarErro(1)
			return
		}

		if(senhaDoUsuario !== confirmarSenha){
			ativarNotificarErro(2)
			return
		}

		alert('tudo certo')
		
		
	}

	return(
		<Container>
			<main>
				<h1>Color Collection</h1>
				<p>Criar Conta</p>

				<form>
					<DadosDeLogin >
						<div className="dadoDeLogin">
							<div className="icon">
								<label htmlFor="name">
									<UserLogin/>
								</label>
							</div>
						
							<input type='text' id='name' placeholder='Nome completo'/>
						</div>
						
					</DadosDeLogin>

					<DadosDeLogin >
						<div className="dadoDeLogin">
							<div className="icon">
								<label htmlFor="email">
									<Email/>
								</label>
							</div>
						
							<input type='text' id='email' placeholder='Email'/>
						</div>
						
					</DadosDeLogin>

					<DadosDeLogin >
						<div className="dadoDeLogin">
							<div className="icon">
								<label htmlFor="newpassword">
									<UserPassword/>
								</label>
							</div>
						
							<input type='password' id='newpassword' placeholder='Crie uma senha'/>
							
							<div className="exibirSenha">
								<ExibirSenha onClick={() => {
									exibirSenha('exibir')
								}}/>
								<OcultarSenha onClick={() => {
									exibirSenha('ocultar')
								}}/>
							</div>
							
						</div>

					</DadosDeLogin>

					<DadosDeLogin >
						<div className="dadoDeLogin">
							<div className="icon">
								<label htmlFor="confirmpassword">
									<UserPassword/>
								</label>
							</div>
						
							<input type='password' id='confirmpassword' placeholder='Confirmar senha'/>
							
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

					
					
					<div className="acessarConta">
						<button 
							onClick={(event) => {
								event.preventDefault()
								cadastrarUsuario()
							}}
						>
							Cadastrar
						</button>

					</div>

					<div className="cadastrar">
						<a href="#">Já tenho conta</a>
					</div>

				</form>
			</main>
		</Container>
	)
}