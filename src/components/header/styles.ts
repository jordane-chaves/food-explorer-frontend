import styled from 'styled-components'

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.dark['700']};

  padding: 3.5rem 1.75rem 1.5rem;

  transform: translateY(-100%);

  animation: slide-down 300ms ease-out forwards;

  @media ${({ theme }) => theme.screens.md} {
    padding: 1.5rem;
  }

  @keyframes slide-down {
    to {
      transform: translateY(0);
    }
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  width: 100%;
  max-width: 70rem;

  margin: 0 auto;

  @media ${({ theme }) => theme.screens.md} {
    gap: 2rem;
  }
`

export const Menu = styled.button`
  background: none;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    height: 2rem;
    width: 2rem;
  }

  @media ${({ theme }) => theme.screens.md} {
    display: none;
  }
`

export const Cart = styled.button`
  background: none;
  border: none;

  height: 2rem;
  width: 2rem;

  position: relative;

  > svg {
    height: 2rem;
    width: 2rem;
  }

  > span {
    background-color: ${({ theme }) => theme.colors.tomato['900']};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5rem;

    height: 1.25rem;
    width: 1.25rem;

    position: absolute;
    right: -15%;
    top: -15%;
  }

  @media ${({ theme }) => theme.screens.md} {
    display: none;
  }
`

export const InputWrapper = styled.div`
  display: none;
  flex: 1;

  max-width: 36rem;

  @media ${({ theme }) => theme.screens.md} {
    display: block;
  }
`

export const DesktopButtonWrapper = styled.div`
  display: none;

  @media ${({ theme }) => theme.screens.md} {
    display: block;
  }
`

export const SignOutButton = styled.button`
  background: none;
  border: none;
  display: none;

  &,
  > svg {
    height: 2rem;
    width: 2rem;
  }

  @media ${({ theme }) => theme.screens.md} {
    display: block;
  }
`
