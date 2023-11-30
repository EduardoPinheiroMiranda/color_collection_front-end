import Styled from 'styled-components'

export const Container = Styled.div`
    background-color: ${({ theme }) => theme.colors.cardColor};
    
    min-width: 32rem;
    max-width: 60rem;
    height: 27rem;

    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.25);


    margin: 0 auto;
    margin-bottom: 5rem;

`

export const Colors = Styled.section`

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

        cursor: pointer;
        transition: all 500ms;

        .infoColor{
            span{
                font-size: 1rem;
                font-weight: 400;
            }

            #copy svg{
                width: 1rem;
                height: 1rem;

                margin-top: 1rem;
            }
        }

    }

    >.color:hover{
        flex: 2;

    }

    

`

export const BodyInfo = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.5rem 1rem;

    >.description{

        p, span{
            color: ${({ theme }) => theme.colors.colorFont1};

            font-size: 1.2rem;
            font-weight: 400;

            margin-bottom: 0.5rem;
        }
        span{
            margin-left: 1rem;
        }
    }

    >#heart svg{
        color: ${({ theme }) => theme.colors.colorFont1};
        cursor: pointer;
    }
`