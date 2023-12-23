import Styled from 'styled-components'

export const Container = Styled.div`
    width: 100%;
    padding: 15rem 5.5rem ;
    
    main{
        
        min-width: 25rem;
        max-width: 50rem;
        margin: 0 auto;

        >h1{
            color: ${({  theme }) => theme.colors.blue};

            font-size: 4rem;
            font-weight: 900;
            text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);

            width: 20rem;
            margin: 0 auto;
        }

        >p{
            color: ${({ theme }) => theme.colors.colorFont1};
            font-size: 2rem;
            font-weight: 900;
            text-align: center;
            margin: 5rem 0;
        }

        >form{

            .redefinirSenha{
                text-align: end;
                margin-top: -1rem;

                a{
                    color: ${({ theme }) => theme.colors.blue};
                    text-decoration: none;

                    font-size: 1rem;
                    font-weight: 900;
                }
            }

            .acessarConta{

                button{
                    background-color: ${({ theme }) => theme.colors.blue};
                    color: ${({ theme }) => theme.colors.colorFont2};

                    font-size: 1.8rem;
                    font-weight: 900;

                    width: 15rem;
                    height: 4rem;

                    border: none;
                    border-radius: 2rem;

                    margin: 0 auto;
                    display: block;

                    margin-top: 11rem;
                    cursor: pointer;
                }
            }

            .cadastrar{
                text-align: center;
                margin-top: 3rem;

                a{
                    color: ${({ theme }) => theme.colors.blue};
                    text-decoration: none;

                    font-size: 1.4rem;
                    font-weight: 900;
                }
            }

        }
    }
    
`

export const DadosDeLogin = Styled.div`
    
    margin-bottom: 3rem;

    >.senhaDoUsuario{
        display: flex;
        box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.10);

        .icon{
            background-color: ${({ theme }) => theme.colors.iconUser};
            width: 3rem;
            height: 3rem;

            display: grid;
            place-items: center
        }

        input{
            color: ${({ theme }) => theme.colors.colorFont1};

            font-size: 1.2rem;
            font-weight: 600;

            width: 100%;
            height: 3rem;
            padding: 0 3rem;

            border: none;

            outline-style: none;
        }
    }

    .NotificarErroAtiva{

        transform: translateY(0);
        opacity: 1;
    }

    
    
`