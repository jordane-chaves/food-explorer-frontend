import styled from 'styled-components'

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.dark['700']};
  padding: 2rem 1.5rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  max-width: 70rem;

  margin: 0 auto;

  > span {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.75rem;
  }

  @media ${({ theme }) => theme.screens.md} {
    flex-direction: initial;
  }
`

export const LogoImg = styled.img`
  height: 1.5rem;
`
