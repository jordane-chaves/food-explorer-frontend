import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.875rem;

  > span {
    font-family: 'Roboto', sans-serif;
    line-height: 1;
  }

  @media ${({ theme }) => theme.screens.md} {
    > span {
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.6;
    }
  }
`

export const ActionButton = styled.button`
  background: none;
  border: none;

  cursor: pointer;

  &,
  > svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`
