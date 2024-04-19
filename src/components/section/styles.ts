import styled from 'styled-components'

export const Container = styled.section`
  margin-block: 1.5rem;

  > h2 {
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.4;
    padding-inline: 1.5rem;
  }

  @media ${({ theme }) => theme.screens.md} {
    margin-block: 3rem;

    > h2 {
      font-size: 2rem;
    }
  }

  @media ${({ theme }) => theme.screens.xl} {
    > h2 {
      padding-inline: 0;
    }
  }
`

export const Content = styled.div`
  margin-top: 1.5rem;
`
