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
	'Erro: as senhas estão diferentes',
	'Erro: A senha deve ter no minimo 4 carcteres'
]

export function CadastrarUsuario(){

	function exibirDadosDaSenha(exibir, ocultar, tipoDoInput, acao){

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

	function exibirNovaSenha(acao){
		const exibir = document.querySelector('.exibirNovaSenha')
		const ocultar = document.querySelector('.ocultarNovaSenha')
		const tipoDoInput = document.querySelector('#novaSenha')

		exibirDadosDaSenha(exibir, ocultar, tipoDoInput, acao)
	}

	function exibirConfirmarSenha(acao){
		const exibir = document.querySelector('.exibirConfirmarSenha')
		const ocultar = document.querySelector('.ocultarConfirmarSenha')
		const tipoDoInput = document.querySelector('#confirmarSenha')

		exibirDadosDaSenha(exibir, ocultar, tipoDoInput, acao)
	}


	function cadastrarUsuario(){
		const notificarErro = document.querySelector('#notificarErro')

		const nomeDoUsuario = document.querySelector('#name').value
		const emailDoUsuario = document.querySelector('#email').value
		const novaSenha = document.querySelector('#novaSenha').value
		const confirmarSenha = document.querySelector('#confirmarSenha').value

		function ativarNotificarErro(erro){
			notificarErro.classList.add('NotificarErroAtiva')
			notificarErro.querySelector('p').textContent = mensagemsDeErro[erro]

			setTimeout(() => {
				notificarErro.classList.remove('NotificarErroAtiva')
			}, 3000)
		}

		if(emailDoUsuario.length == 0 || novaSenha.length == 0 ||
			nomeDoUsuario.length == 0 || confirmarSenha.length == 0){//verifica se os capos estão vazios
			ativarNotificarErro(0)
			return
		}

		if(!emailDoUsuario.includes('@')){ //verifica o emal
			ativarNotificarErro(1)
			return
		}

		if(novaSenha !== confirmarSenha){
			ativarNotificarErro(2)
			return
		}

		if(novaSenha.length <= 3){
			ativarNotificarErro(3)
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
						<div className='dadoDeLogin'>
							<div className='icon'>
								<label htmlFor='name'>
									<UserLogin/>
								</label>
							</div>
						
							<input type='text' id='name' placeholder='Nome completo'/>
						</div>
						
					</DadosDeLogin>

					<DadosDeLogin >
						<div className='dadoDeLogin'>
							<div className='icon'>
								<label htmlFor='email'>
									<Email/>
								</label>
							</div>
						
							<input type='text' id='email' placeholder='Email'/>
						</div>
						
					</DadosDeLogin>

					<DadosDeLogin >
						<div className='dadoDeLogin'>
							<div className='icon'>
								<label htmlFor='novaSenha'>
									<UserPassword/>
								</label>
							</div>
						
							<input type='password' id='novaSenha' placeholder='Crie uma senha'/>
							
							<div className='exibirSenha'>
								<ExibirSenha className='exibirNovaSenha' onClick={() => {
									exibirNovaSenha('exibir')
								}}/>
								<OcultarSenha className='ocultarNovaSenha' onClick={() => {
									exibirNovaSenha('ocultar')
								}}/>
							</div>
							
						</div>

					</DadosDeLogin>

					<DadosDeLogin >
						<div className='dadoDeLogin'>
							<div className='icon'>
								<label htmlFor='confirmarSenha'>
									<UserPassword/>
								</label>
							</div>
						
							<input type='password' id='confirmarSenha' placeholder='Confirmar senha'/>
							
							<div className='exibirSenha'>
								<ExibirSenha className='exibirConfirmarSenha' onClick={() => {
									exibirConfirmarSenha('exibir')
								}}/>
								<OcultarSenha className='ocultarConfirmarSenha' onClick={() => {
									exibirConfirmarSenha('ocultar')
								}}/>
							</div>
							
						</div>
						
						<NotificarErro mensage={mensagemsDeErro[0]}/>

					</DadosDeLogin>

					
					
					<div className='acessarConta'>
						<button 
							onClick={(event) => {
								event.preventDefault()
								cadastrarUsuario()
							}}
						>
							Cadastrar
						</button>

					</div>

					<div className='cadastrar'>
						<a href='#'>Já tenho conta</a>
					</div>

				</form>
			</main>
		</Container>
	)
}