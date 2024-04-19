import styled from 'styled-components'

export const Container = styled.div`
  --swiper-navigation-color: ${({ theme }) => theme.colors.light['100']};
  --swiper-navigation-size: 2.5rem;

  & .swiper-button-next,
  & .swiper-button-prev {
    display: none;
  }

  @media ${({ theme }) => theme.screens.md} {
    & .swiper-button-next,
    & .swiper-button-prev {
      display: initial;
    }
  }
`

export const GradientEffect = styled.div`
  background: ${({ theme }) => theme.colors.gradients['100']};
  display: none;

  height: 100%;
  width: 100%;
  max-width: 17rem;

  pointer-events: none;
  position: absolute;
  z-index: 2;

  &[slot='container-start'] {
    transform: scale(-1, 1);
  }

  &[slot='container-end'] {
    right: 0;
    top: 0;
  }

  @media ${({ theme }) => theme.screens.md} {
    display: block;
  }
`
