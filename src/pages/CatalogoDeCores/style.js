import Styled from 'styled-components'

export const Container = Styled.div`
    background-color: ${({ theme }) => theme.colors.background};

    height: 100vh;
    width: 100%;

    position: relative;

    border: 1px solid red;

    @media(min-width: 700px){
        main{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 27rem;
            gap: 5rem;
        }
    }

    @media(min-width: 901px){
        display: flex;

        #menuDoTopo, #header{ display: none; }

        #menuFixed{ display: block; }

        main{
            display: grid;
            grid-template-columns: 1fr;

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
        height: calc( 100vh - 11rem);
        min-width: 36rem;
        width: 100%;

        overflow-y: auto;

        padding: 5rem 2rem;

        display: grid;
        justify-content: center;
        
    }


    .closeMenu{
        transform: translateX(0);
    }
    
`