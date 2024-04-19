import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr max-content;

  height: 100vh;
  width: 100%;
`

export const Content = styled.main`
  margin-block: 1rem;
  padding: 2rem 3.5rem;

  width: 100%;

  @media ${({ theme }) => theme.screens.md} {
    max-width: 70rem;
    margin: 0 auto;
    padding: 2rem 0;
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

export const DishContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 1rem;

  @media ${({ theme }) => theme.screens.md} {
    flex-direction: row;
    gap: 3rem;

    margin-top: 2.5rem;
  }
`

export const DishInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  width: 100%;

  @media ${({ theme }) => theme.screens.md} {
    align-items: flex-start;
  }
`

export const DishInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  &:has(.loading-item) {
    width: 100%;
  }

  > h1 {
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1.4;
  }

  > h1.loading-item {
    height: 1.75rem;
    width: 60%;
  }

  > p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.4;
    text-align: center;
  }

  > p.loading-item {
    height: 6rem;
    width: 100%;
  }

  @media ${({ theme }) => theme.screens.md} {
    align-items: flex-start;

    > h1 {
      font-size: 2.5rem;
    }

    > p {
      font-size: 1.5rem;
      text-align: left;
    }
  }
`

export const ImageWrapper = styled.div`
  aspect-ratio: 1/1;
  padding-inline: 1.5rem;

  &,
  > img {
    width: 100%;
  }

  @media ${({ theme }) => theme.screens.md} {
    max-width: 24rem;
  }
`

export const ImagePreview = styled.div`
  height: max-content;
  width: 100%;

  & > * {
    width: 100%;
  }
`

export const Ingredients = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;

  &.loading-item {
    height: 2.5rem;
    width: 100%;
  }

  @media ${({ theme }) => theme.screens.md} {
    gap: 0.75rem;
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 1rem;

  > :first-child {
    gap: 1rem;

    svg {
      height: 1.75rem;
      width: 1.75rem;
    }

    span {
      font-size: 1.25rem;
      font-weight: 700;
    }
  }

  > :last-child {
    padding: 0.5rem 1rem;
    width: 100%;

    svg {
      height: 1.25rem;
      width: 1.25rem;
    }

    span {
      font-size: 0.75rem;
      line-height: 1rem;
    }
  }

  @media ${({ theme }) => theme.screens.md} {
    gap: 2rem;

    > :last-child {
      padding: 0.75rem 1.5rem;

      :first-child {
        display: none;
      }

      span {
        font-size: 0.875rem;
        line-height: 1.5rem;
      }
    }
  }
`
