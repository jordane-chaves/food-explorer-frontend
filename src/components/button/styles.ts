import { CircleNotch } from '@phosphor-icons/react'
import styled from 'styled-components'

export const Container = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  border: none;
  border-radius: 0.25rem;
  background-color: ${({ theme, $variant = 'primary' }) =>
    $variant === 'primary'
      ? theme.colors.tomato['900']
      : theme.colors.dark['800']};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  padding: 0.75rem 2rem;

  transition: background 0.2s;

  &:hover {
    background-color: ${({ theme, $variant = 'primary' }) =>
      $variant === 'primary'
        ? theme.colors.tomato['800']
        : theme.colors.dark['900']};
  }

  &:disabled {
    background-color: ${({ theme, $variant = 'primary' }) =>
      $variant === 'primary'
        ? theme.colors.tomato['600']
        : theme.colors.dark['700']};

    cursor: not-allowed;

    > span {
      opacity: 0.75;
    }
  }

  > span {
    min-width: max-content;
    font-weight: 500;
  }
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &,
  > svg {
    height: 2rem;
    width: 2rem;
  }
`

export const LoadingSpin = styled(CircleNotch)`
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
