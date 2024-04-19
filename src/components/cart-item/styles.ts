import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding-block: 1rem;
`

export const ImageWrapper = styled.div`
  border-radius: 50%;

  height: 4.5rem;
  width: 4.5rem;

  overflow: hidden;

  > img {
    width: 100%;
  }
`

export const CartText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  strong {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.6;
  }
`

export const RemoveButton = styled.button`
  background: none;
  border: none;

  color: ${({ theme }) => theme.colors.tomato['600']};
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  line-height: 1.6;
`

export const Price = styled.span`
  color: ${({ theme }) => theme.colors.light['400']};
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  line-height: 1.6;
`
