import Styled from 'styled-components'

export const Container = Styled.div`
    svg{
        fill: ${({ theme }) => theme.colors.colorFont1};

        width: 2rem;
        height: 2rem;
        
        cursor: pointer;
    }
`