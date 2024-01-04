import Styled from 'styled-components'

export const Container = Styled.div`
    width: 100%;
    height: calc(100vh - 10.1rem);

    display: flex;

    position: absolute;
    top: 10rem;
    
    transform: translateX(-90rem);
    transition: all 600ms;

    >.blockedSection{
        background-color: rgba(0, 0, 0, 0.10);

        width: 100%;
        height: 100%;

        opacity: 0;
        transition: all 600ms;
    }
    >.blockedSectionOn{
        opacity: 1;
    }

`

export const Navbar = Styled.nav`

    background-color: ${({ theme }) => theme.colors.blue};

    width: 19rem;
    height: 100%;

    padding: 5rem 0;

    box-shadow: 3px 4px 5px 0px rgba(0, 0, 0, 0.25);

    >ul{
        li:nth-child(n+5){
            .linktoMenuHidden{
                margin-left: 2rem;
            }
        }

        hr{
            width: 15rem;
            margin: 5rem auto;
        }
    }


`

export const TagsElements = Styled.li`

    height: 4rem;

    list-style: none;
    
    display: flex;
    align-items: center;

    position: relative;;

    >div:nth-child(1){
        padding: 0 3rem;
        z-index: 2;
       

        .selecionarSessao_MenuDoTopo{
            color: ${({ theme })=> theme.colors.colorFont2};

            text-decoration: none;
            font-size: 1.6rem;
            font-weight: 500;
            
        }

        .colorLink{
            color: ${({ theme }) => theme.colors.blue};
        }

    }

    >.selectorOff{
        width: 0;
        height: 4rem;

        position: absolute;
        top: 0;

        z-index: 0;

        transition: all 500ms;
    }

    >.selectorOn{
        background-color: ${({ theme }) => theme.colors.colorFont2};
        
        width: 95%;
        border-radius: 0 0.5rem 0.5rem 0;
    }


`