import Styled from 'styled-components'

export const Container = Styled.header`
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.colorFont2};
    box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);

    width: 100%;
    height: 7rem;
    padding: 0 2.5rem;


    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;

    >.logo{
        display: grid;

        span{
            font-size: 2rem;
            font-weight: 900;
        }
    }

    >.search{
        display: flex;
        align-items: center;

        input{
            color: ${({ theme }) => theme.colors.colorFont1};

            min-width: 13rem;
            width: 100%;
            height: 2rem;

            padding: 0 1rem;

            border-radius: 0 1rem;
            border: none;

            outline-style: none;
            

        }

        #search svg{
            margin: 0 2rem 0 1rem;
        }
        
        .menuOn{
            transform: rotate(90deg);
        }
    }

    
`