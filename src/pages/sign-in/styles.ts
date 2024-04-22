import styled from 'styled-components'

export const Container = styled.div`
  height: 100dvh;
  width: 100%;
  padding: 3rem 2rem;

  @media ${({ theme }) => theme.screens.md} {
    display: flex;
    align-items: center;
    padding: 10rem 2rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  text-align: center;

  margin: 0 auto;
  width: 100%;

  padding-bottom: 5rem;

  > h1 {
    display: none;

    color: ${({ theme }) => theme.colors.light['100']};
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.4;
  }

  @media ${({ theme }) => theme.screens.md} {
    background-color: ${({ theme }) => theme.colors.dark['700']};
    border-radius: 1rem;

    max-width: 28rem;
    padding: 4rem;

    > h1 {
      display: block;
    }
  }
`

export const LogoWrapper = styled.div`
  align-self: flex-start;
  margin: 0 auto 4.5rem;

  > img {
    height: 2.75rem;
  }

  @media ${({ theme }) => theme.screens.md} {
    align-self: inherit;
  }
`
