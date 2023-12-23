import Styled from 'styled-components'

export const Container = Styled.div`
    background-color: #FF8484;

    margin-top: 2rem;
    padding: 0.5rem 2rem;

    transform: translateY(-4rem);
    opacity: 0;

    transition: all 800ms;

    p{
        color: #d10303;

        font-size: 1.2rem;
        font-weight: 600;

        text-align: center;
    }
   
`

/*
    para ativar o elemento adicione a classe NotificarErroAtiva

    .NotificarErroAtiva{

        transform: translateY(0);
        opacity: 1;
    }
*/