import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ItemsContainer = styled.div`
  background: ${({ theme }) => theme.colors.dark['800']};
  border-radius: 0.5rem;

  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  padding: 0.5rem;

  &:has(input:focus-visible) {
    outline: 2px solid ${({ theme }) => theme.colors.cake['800']};
  }
`

export const Item = styled.div<{ $isNew: boolean }>`
  background: ${({ theme, $isNew }) =>
    $isNew ? 'transparent' : theme.colors.light['600']};
  outline: ${({ theme, $isNew }) =>
    $isNew ? `2px dashed ${theme.colors.light['500']}` : 'none'};
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.25rem 1rem;
`

export const Input = styled.input`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.light['100']};

  line-height: 1.25rem;

  max-width: 4.5rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.light['500']};
  }
`

export const IconButton = styled.button`
  background: none;
  border: none;

  &,
  > svg {
    height: 1rem;
    width: 1rem;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
