import Styled from 'styled-components'

export const Container = Styled.header`
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.colorFont2};
    box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);

    min-width: 32rem;
    max-width: 144rem;
    height: 4rem;
    padding: 0 2rem;


    display: flex;
    align-items: center;
    justify-content: space-between;

    >.logo{
        display: grid;

        span{
            font-size: 1.4rem;
            font-weight: 900;
        }
    }

    >.search{
        display: flex;
        align-items: center;

        input{
            color: ${({ theme }) => theme.colors.colorFont1};

            width: 11.3rem;
            height: 2rem;

            padding: 0 1rem;

            border-radius: 1rem;
            border: none;

            outline-style: none;
            

            margin: 0 1rem 0 4rem;
        }
    }

    

`