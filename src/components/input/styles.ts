import styled from 'styled-components'

export const Container = styled.label`
  color: ${({ theme }) => theme.colors.light['400']};
  text-align: left;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  min-width: max-content;
  width: 100%;
`

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.dark['900']};
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 0.75rem 0.875rem;

  position: relative;
  z-index: 1;

  &:has(input:disabled),
  &:has(input:disabled) input,
  &:has(textarea:disabled) textarea {
    cursor: not-allowed;
  }

  > input,
  > textarea {
    background: none;
    border: none;

    min-height: 1.5rem;

    flex: 1;
    resize: none;
  }

  > textarea {
    outline: none !important;
    min-height: 10rem;
  }

  > span {
    color: ${({ theme }) => theme.colors.light['500']};
    font-family: 'Roboto', sans-serif;
  }

  &:has(input:focus-visible),
  &:has(textarea:focus) {
    outline: 2px solid ${({ theme }) => theme.colors.cake['800']};

    span {
      color: ${({ theme }) => theme.colors.light['100']};
    }
  }
`

export const IconWrapper = styled.div`
  &,
  > svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`

export const Description = styled.div`
  background: ${({ theme }) => theme.colors.dark['500']};
  border-radius: 0 0 0.5rem 0.5rem;

  margin-top: -0.5rem;
  padding: 0.75rem 0.5rem 0.5rem;

  > span {
    opacity: 0.5;
    font-size: 0.75rem;
  }
`
