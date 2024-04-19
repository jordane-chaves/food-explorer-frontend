import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  min-height: 18rem;
  min-width: 13rem;
  width: fit-content;
  padding: 1.5rem;

  position: relative;
  cursor: pointer;

  transition: scale 300ms;

  @media ${({ theme }) => theme.screens.md} {
    gap: 1rem;
    min-height: 29rem;
  }

  &:hover {
    scale: 1.1;

    img {
      filter: saturate(1);
    }
  }
`

export const ImageWrapper = styled.div`
  --size: 5.5rem;

  border-radius: 50%;
  display: flex;
  max-height: var(--size);

  &,
  > img {
    height: var(--size);
    width: var(--size);
  }

  > img {
    filter: saturate(0.6);
    transition: filter 300ms;
  }

  @media ${({ theme }) => theme.screens.md} {
    --size: 11rem;
  }
`

export const Title = styled.strong`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5rem;

  text-align: center;

  @media ${({ theme }) => theme.screens.md} {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.4;
  }
`

export const Description = styled.p`
  display: none;

  @media ${({ theme }) => theme.screens.md} {
    display: block;

    color: ${({ theme }) => theme.colors.light['400']};
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 1.6;
    text-align: center;
  }
`

export const Price = styled.span`
  color: ${({ theme }) => theme.colors.cake['200']};
  font-family: 'Roboto', sans-serif;
  line-height: 1;

  @media ${({ theme }) => theme.screens.md} {
    font-size: 2rem;
    line-height: 1.6;
  }
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;

  & > :last-child {
    padding: 0.5rem 1.5rem;

    > span {
      line-height: 1;
    }
  }

  @media ${({ theme }) => theme.screens.md} {
    flex-direction: row;
    justify-content: center;
    align-items: center;

    & > :last-child {
      padding: 0.75rem 1.5rem;

      > span {
        line-height: 1.5rem;
      }
    }
  }
`

export const IconButton = styled.button`
  background: none;
  border: none;

  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  &,
  > svg {
    height: 1.5rem;
    width: 1.5rem;
  }

  > svg {
    transition: filter 200ms;
  }

  &:hover {
    > svg {
      filter: brightness(0.8);
    }
  }
`
