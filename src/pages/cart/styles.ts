import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr max-content;

  height: 100vh;
`

export const Content = styled.main`
  max-width: 70rem;
  padding: 3.5rem 2.25rem;

  width: 100%;

  h1 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.4;
  }

  @media ${({ theme }) => theme.screens.md} {
    margin: 0 auto;
  }

  @media ${({ theme }) => theme.screens.xl} {
    padding: 2rem 0;
  }
`

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;

  height: 100%;

  > img {
    max-width: 20rem;
  }

  > h2 {
    color: ${({ theme }) => theme.colors.light['600']};
    font-size: 1.5rem;
  }
`

export const Orders = styled.div``

export const Items = styled.div`
  margin-top: 1.75rem;
`

export const Summary = styled.div`
  margin-block: 1rem;

  > strong {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.6;
  }
`
