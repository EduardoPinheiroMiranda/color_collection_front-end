import Styled from 'styled-components'

export const Container = Styled.div`

    >svg{
        color: ${({ theme }) => theme.colors.notLiked};

        width: 2rem;
        height: 2rem;

        cursor: pointer;
        transition: all 500ms;
    }

    svg:hover{
        transform: scale(0.9, 0.9)
    }

    .isLiked{
        color: ${({ theme }) => theme.colors.isLiked};
    }
`