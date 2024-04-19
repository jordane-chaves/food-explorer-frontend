import styled from 'styled-components'

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.colors.dark['400']};

  display: flex;
  flex-direction: column;

  position: absolute;
  inset: 0;
  z-index: 1000;

  transform: translateX(-100%);
  transition: transform 300ms ease-in-out;

  &[data-menu-is-open='true'] {
    transform: translateX(0);
  }
`

export const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.dark['700']};

  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 3.5rem 1.75rem 1.5rem;

  > h2 {
    color: ${({ theme }) => theme.colors.light['100']};
    font-family: 'Roboto', sans-serif;
    font-size: 1.375rem;
  }
`

export const CloseButton = styled.button`
  background: none;
  border: none;

  height: 1.75rem;
  width: 1.75rem;

  > svg {
    height: 1.75rem;
    width: 1.75rem;
  }
`

export const Content = styled.div`
  flex: 1;

  padding: 2.25rem 1.75rem;

  overflow-y: auto;
`

export const Nav = styled.nav`
  margin-top: 2rem;

  > a {
    border-bottom: 1px solid ${({ theme }) => theme.colors.dark['1000']};
    display: flex;

    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1.4;

    padding: 0.5rem;
  }
`
