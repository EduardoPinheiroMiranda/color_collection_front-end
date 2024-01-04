import Styled from 'styled-components'

export const Container = Styled.div`
    background-color: ${({ theme }) => theme.colors.background};

    height: 100vh;
    width: 100%;


    @media(min-width: 700px){
        main{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 27rem;
        }
    }

    @media(min-width: 901px){
        display: flex;

        #menuDoTopo, #header{ display: none; }

        #menuFixed{ display: block; }

        main{
            display: grid;
            grid-template-columns: 1fr;
            margin: auto 0;

        }
    }

    @media(min-width: 1024px){
        main{
            display: grid;
            align-items: center;
            grid-template-columns: repeat(2,1fr);
        }
    }

    @media(min-width: 1700px){
        main{
            display: grid;
            grid-template-columns: repeat(3,1fr);
        }
    }

    >main{

        height: calc(100% - 11rem);

        min-width: 36rem;
        width: 100%;

        overflow-y: auto;

        padding: 5rem 2rem;

        display: grid;
        justify-content: center;
        gap: 5rem;
        
    }


    .closeMenu{
        transform: translateX(0);
    }

`