import Styled from 'styled-components'

export const Container = Styled.div`

    >svg{
        color: ${({ theme }) => theme.colors.notLiked};

        width: 2rem;
        height: 2rem;

        cursor: pointer;
    }

    .isLiked{
        color: ${({ theme }) => theme.colors.isLiked};
    }
`