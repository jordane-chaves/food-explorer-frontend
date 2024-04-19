import styled from 'styled-components'

export const Content = styled.dialog`
  border: none;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.dark['400']};
  border: 1px solid ${({ theme }) => theme.colors.dark['900']};

  padding: 1rem;
  margin: auto;

  &::backdrop {
    background: rgb(
      from ${({ theme }) => theme.colors.dark['100']} r g b / 0.9
    );
  }
`

export const Close = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.dark['800']};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 1.5rem;
  width: 1.5rem;

  position: absolute;
  right: 0.5rem;
  top: 0.5rem;

  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.dark['1000']};
  }

  > svg {
    fill: ${({ theme }) => theme.colors.light['500']};
  }
`
