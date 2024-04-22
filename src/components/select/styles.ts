import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.light['400']};
  font-family: 'Roboto', sans-serif;
  line-height: 1.5rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  > button {
    background: ${({ theme }) => theme.colors.cake['200']};
    border: none;
    border-radius: 9999px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.375rem 0.75rem;

    span {
      color: ${({ theme }) => theme.colors.dark['1000']};
      font-size: 0.75rem;
      font-weight: 500;
      line-height: 1;
    }

    svg {
      fill: ${({ theme }) => theme.colors.dark['1000']};
      height: 0.75rem;
      width: 0.75rem;
    }
  }

  > button:hover {
    filter: brightness(0.9);
  }

  > button:disabled {
    cursor: not-allowed;
    filter: brightness(0.7);
  }
`

export const SelectWrapper = styled.div`
  background: ${({ theme }) => theme.colors.dark['900']};
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  position: relative;

  &:has(select:focus) {
    outline: 2px solid ${({ theme }) => theme.colors.cake['800']};
  }

  &:has(select:disabled) {
    background: ${({ theme }) => theme.colors.dark['700']};

    &,
    select {
      cursor: not-allowed;
    }

    > svg {
      fill: ${({ theme }) => theme.colors.light['700']};
    }
  }

  > select {
    appearance: none;
    border: none;
    background: none;
    flex: 1;

    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 1.5rem;

    min-height: 1.5rem;

    padding: 0.75rem 0.875rem;

    option {
      color: ${({ theme }) => theme.colors.dark['100']};
    }
  }

  > svg {
    fill: ${({ theme }) => theme.colors.light['200']};

    height: 1.5rem;
    width: 1.5rem;

    position: absolute;
    right: 1rem;

    pointer-events: none;
  }
`
