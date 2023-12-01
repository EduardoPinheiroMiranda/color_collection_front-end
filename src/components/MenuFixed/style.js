import Styled from 'styled-components'

export const Container = Styled.div`

    background-color: ${({ theme }) => theme.colors.blue};

    display: none;

    width: 33rem;
    height: 100vh;

`

export const Header = Styled.div`

    h2{
        color: ${({ theme }) => theme.colors.colorFont2};

        font-size: 4rem;
        font-weight: 900;

        width: 20rem;

        margin: 3rem 11.2rem 3rem 2rem;
    }



    .input{

        display: flex;
        
        input{
            width: 25rem;
            height: 2.5rem;

            outline-style: none;
            border: none;
            border-radius: 0 1rem;

            margin: 0 1.5rem 3rem 2rem;

        }

        #search svg{
            color: ${({ theme }) => theme.colors.colorFont2};

            width: 2.5rem;
            height: 2.5rem;

            cursor: pointer;
        }


    }

`

export const NavBar = Styled.nav`
     ul{
        /* li:hover{
            hr{
                width: 13rem;
                opacity: 1;
            }
        } */

        li:nth-child(n+5){
            .link{
                margin-left: 2rem;
            }
        }
    }

`


export const TagsElements = Styled.li`

    height: 4rem;

    list-style: none;
    
    display: flex;
    align-items: center;

    position: relative;;

    .link{
        padding: 0 3rem;
        z-index: 2;

        a{
            color: ${({ theme }) => theme.colors.colorFont2};

            text-decoration: none;
            font-size: 1.6rem;
            font-weight: 500;

            cursor: pointer;
            
        }

        hr{
            background-color: ${({ theme }) => theme.colors.colorFont2};

            width: 0;
            height: 5px;

            border: none;
            border-radius: 1rem;

            opacity: 0;

            transition: all 500ms;
        }

        .selectColor{
            color: ${({ theme }) => theme.colors.blue};
        }
    }

   

    .sections{
        width: 0;
        height: 4rem;

        position: absolute;
        top: 0;

        z-index: 1;

        transition: all 500ms;
    }

    .selector{
        background-color: ${({ theme }) => theme.colors.colorFont2};
        color: ${({ theme }) => theme.colors.blue};

       

        width: 95%;
        border-radius: 0 0.5rem 0.5rem 0;
    }


`