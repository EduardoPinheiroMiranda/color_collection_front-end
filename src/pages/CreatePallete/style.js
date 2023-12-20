import Styled from 'styled-components'

export const Container = Styled.div`
    height: 100vh;
    width: 100%;
  
    main{
        border: 1px solid red;

        height: 100%;
        min-width: 32rem;
        max-width: 62rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin: 0 auto;

        button{
            background-color: ${({ theme }) => theme.colors.blue};
            color: ${({ theme }) => theme.colors.colorFont2};

            font-size: 1.8rem;
            font-weight: 900;

            min-width: 15rem;
            max-width: 25rem;

            min-height: 4rem;
            max-height: 6rem;

            border-radius: 2.5rem;
            border: none;
            box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.25);

            margin-top: 12rem;
        }
    }
`

export const InfoPallet = Styled.section`
    width: 100%;
    padding: 0 2rem;

    h2{
        color: ${({ theme }) => theme.colors.colorFont1};

        font-size: 1.4rem;
        font-weight: 900;

        margin-bottom: 2rem;
    }

    .categore{
        margin-bottom: 2rem;

        select{
            background-color:  white;
            color: ${({ theme }) => theme.colors.colorFont1};

            font-weight: 600;
            font-size: 1.2rem;
            text-align: center;

            width: 20rem;

            border: 0.5px solid  ${({ theme }) => theme.colors.blue};
            border-radius: 0.5rem;

            outline-style: none;

        }

        span{
            color: ${({ theme }) => theme.colors.colorFont1};
            font-size: 1.2rem;
            font-weight: 900;

            margin-left: 2rem;
        }
    }

    .name{
        width: 100%;
        margin-bottom: 3rem;

        input{
            color: ${({ theme }) => theme.colors.colorFont1};

            width: 20rem;
            padding: 0 1rem;

            border: 0.5px solid  ${({ theme }) => theme.colors.blue};
            border-radius: 0.5rem;

            outline-style: none;
        }

        label{
            color: ${({ theme }) => theme.colors.colorFont1};

            font-size: 1.2rem;
            font-weight: 900;

            margin-left: 2rem;
        }
    }
`

export const CodPallet = Styled.section`
    width: 100%;
    padding: 0 2rem;

    .header{
        display: flex;
        margin-bottom: 3rem;

        h2{
            color: ${({ theme }) => theme.colors.colorFont1};

            font-size: 1.4rem;
            font-weight: 900;
            margin-right: 1rem;
        }
        
    }
    .pallet{
        display: flex;
        justify-content: center;
        box-shadow: 0px 2px 5px  rgba(0, 0, 0, 0.25);
        border-radius: 0.5rem;
     

        .card{
            min-width: 6.3rem;
            max-width: 12rem;
            width: 100%;

            height: 20rem;

            display: flex;
            align-items: end;

            border: 1px solid ${({ theme }) => theme.colors.colorFont1};


            input{
                width: 6rem;

                text-align: center;
                
                border: none;
                outline-style: none;

                margin: 0 auto 4rem;

            }
        }
        
        .card:first-child{
            border-radius: 0.5rem 0 0 0.5rem;
        }

        .card:last-child{
            border-radius: 0 0.5rem 0.5rem 0;
        }
    }
`