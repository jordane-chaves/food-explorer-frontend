import styled from 'styled-components'

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.dark['700']};
  padding: 2rem 1.5rem;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 70rem;

  margin: 0 auto;

  > span {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.75rem;
  }
`

export const LogoImg = styled.img`
  height: 1.5rem;
`
