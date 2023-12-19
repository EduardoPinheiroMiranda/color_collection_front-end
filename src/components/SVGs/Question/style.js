import Styled from 'styled-components'

export const Container = Styled.div`
    svg{
        fill: ${({ theme })=> theme.colors.blue}; 

        width: 1.5rem;
        height: 1.5rem;
    }
`