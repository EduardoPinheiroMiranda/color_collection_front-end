import Styled from 'styled-components'

export const Container = Styled.div`
    background-color: ${({ theme }) => theme.colors.background};

    position: relative;

    
    

    >main{
        height: calc(100vh - 7rem);
        overflow-y: auto;

        min-width: 36rem;
        max-width: 137rem;

        padding: 5rem 2rem;
    }
    
    #menuList{
        position: absolute;
        top: 7rem;
    }

    .closeMenu{
        transform: translateX(0);
    }
    
`