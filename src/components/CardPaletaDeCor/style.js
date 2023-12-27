import Styled from 'styled-components'

export const Container = Styled.div`
    background-color: ${({ theme }) => theme.colors.cardColor};
    
    min-width: 32rem;
    max-width: 60rem;
    height: 27rem;

    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.25);

    margin-bottom: 5rem;
`

export const Cores = Styled.section`

    display: flex;

    >.color{

        min-width: 6.4rem;
        width: 12rem;
        height: 20rem;

        padding-bottom: 2rem;

        text-align: center;

        display: flex;
        align-items: end;
        justify-content: center;

        flex: 1;

        transition: all 500ms;

        .infoColor{
            cursor: pointer;
            span{
                font-size: 1rem;
                font-weight: 400;
            }

            #copy svg{
                width: 1rem;
                height: 1rem;

                margin-top: 1rem;
            }

            #check svg{
                margin-top: 0.5rem;
            }

            .hide{
                display: none;
            }
        }

    }

    >.color:hover{
        flex: 2;

    }

    

`

export const InformacoesDaPaleta = Styled.div`
    background-color: white;

    position: relative;
 
    >.legenda{
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 1.5rem 1rem;

        position: absolute;

        .descricao{
            display: grid;
            gap: 1rem;

            p{
                color: ${({ theme }) => theme.colors.colorFont1};

                font-size: 1.2rem;
                font-weight: 400;
            }

        }

        .elementosDeAcao{
            display: flex;
            gap: 1rem;
        }

    }

    >.opcoesDoMenu{
        background-color: white;

        width: 7rem;
        padding: 2px;

        border-radius: 0.5rem 0.5rem 0 0;

        margin-left: calc(100% - 7rem);

        opacity: 0;

        transition: all 500ms;

        p{
            color: ${({ theme }) => theme.colors.colorFont1};

            font-size: 1.2rem;
            font-weight: 400;

            height: 2rem;

            padding: 5px;

            display: flex;
            align-items: center;
            justify-content: center;

            
            cursor: pointer;

        }

        p:nth-child(1){
            border-bottom: 1px solid ${({ theme }) => theme.colors.colorFont1};
        }
    }
    >.ativarMenu{
        transform: translateY(-4.2rem);
        opacity: 1;
    }
`
