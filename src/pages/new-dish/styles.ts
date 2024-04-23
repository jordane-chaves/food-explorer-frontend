import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr max-content;

  height: 100vh;
  width: 100%;
`

export const Content = styled.main`
  padding: 0.75rem 2rem 3.25rem;

  width: 100%;

  @media ${({ theme }) => theme.screens.md} {
    max-width: 70rem;
    margin: 0 auto;

    padding: 2.5rem 2rem 7rem;
  }

  @media ${({ theme }) => theme.screens.xl} {
    padding-inline: 0;
  }
`

export const ReturnButton = styled.button`
  border: none;
  background: none;

  display: flex;
  align-items: center;

  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.4;

  max-width: max-content;

  > svg {
    height: 2rem;
    width: 2rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  margin-top: 2rem;

  > h1 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.4;
  }
`

export const InputsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  > * {
    width: 100%;
  }

  @media ${({ theme }) => theme.screens.md} {
    flex-direction: row;
    align-items: flex-start;
    gap: 2rem;

    .image {
      max-width: 15rem;
    }

    .categories {
      flex: 1;
    }

    .name,
    .ingredients {
      flex: 1;
    }

    .price {
      max-width: 15.75rem;
    }
  }
`

export const FileSelectText = styled.span`
  color: ${({ theme }) => theme.colors.light['100']};

  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5rem;

  cursor: pointer;

  &:has(+ input:disabled) {
    cursor: not-allowed;
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 2rem;

  > button {
    flex: 1;
  }

  @media ${({ theme }) => theme.screens.md} {
    justify-content: flex-end;

    > button {
      flex: 0;
    }
  }
`
