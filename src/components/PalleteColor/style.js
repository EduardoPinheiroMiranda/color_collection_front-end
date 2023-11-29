import Styled from 'styled-components'

export const Container = Styled.div`
   
    margin: 0 auto;

    >.titleProject{
        display: flex;

        margin-bottom: 1.5rem;

        h2{
            color: ${({ theme }) => theme.colors.colorFont1};
            font-size: 1.4rem;
            font-weight: 900;

        }
        
        #arrow{
            display: flex;
            align-items: end;

            svg{
                fill: ${({ theme }) => theme.colors.colorFont1};
            }
        }
    }

    

`

export const BodyPallete = Styled.div`
    margin-bottom: 2rem;
`

export const Colors = Styled.div`

    min-width: 28rem;
    max-width: 30rem;

    display: flex;
    cursor: pointer;

    border-radius: 1rem;
    box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
    

    >.color{

        min-width: 5.6rem;
        max-Width: 6rem;
        height: 10rem;
        transition: all 300ms;

        .infoColor{
            

            text-align: center;
            margin-top: 6rem;

            span{
                font-size: 1rem;
                font-weight: 400;
            }
        }
    }

    .color:first-child{
        border-radius: 0.5rem 0 0 0.5rem;
    }

    .color:last-child{
        border-radius: 0 0.5rem 0.5rem 0;
    }

    >.color:hover{

        transform: scale(1.2);
        margin: 0 7px;

        border-radius: 5px;
    }

    

`

export const BodyInfo = Styled.div`


    >.description{
        display: flex;

        p{
            color: ${({ theme }) => theme.colors.colorFont1};
            font-size: 1rem;
            font-weight: 900;
        }

        #arrow svg{
            fill: ${({ theme }) => theme.colors.colorFont1};
            width: 1.5rem;
            height: 1.5rem;

            cursor: pointer;
        }

    }
`