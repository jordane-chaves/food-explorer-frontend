import styled from 'styled-components'

import HeroImg from '@/assets/hero.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;

  flex: 1;
  margin: 0 auto;
  max-width: 70rem;
  width: 100%;
`

export const EmptyDishes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex: 1;
  min-height: 10rem;
  margin-bottom: 3rem;

  > img {
    max-width: 15rem;
    margin-bottom: 1rem;

    opacity: 0.6;
  }

  > div {
    margin-top: 1.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.cake['200']};
    text-decoration: underline;
    text-transform: uppercase;
  }
`

export const Hero = styled.section`
  padding: 2rem 1rem 0 2rem;
  margin-top: 1rem;
  margin-bottom: 4rem;

  position: relative;

  &::before {
    content: '';
    background: url(${HeroImg}) no-repeat top left/100%;
    filter: brightness(0.85);
    scale: -1 1;

    height: 100%;
    width: 46%;

    position: absolute;
    top: 0;
    left: 0;

    opacity: 0;

    animation:
      fade-in 800ms ease-in-out forwards 500ms,
      vibrate 6s linear infinite both 1s;
  }

  @media ${({ theme }) => theme.screens.lg} {
    padding: 8.25rem 1rem 0.875rem;

    &::before {
      left: -2.5rem;
      width: 55%;

      clip-path: polygon(
        0% 0%,
        0% 96.5%,
        85% 96.5%,
        85% 100%,
        100% 100%,
        100% 0%
      );
    }
  }

  @keyframes fade-in {
    100% {
      opacity: 0.8;
    }
  }

  @keyframes vibrate {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-2px, 2px);
    }
    40% {
      transform: translate(-2px, -2px);
    }
    60% {
      transform: translate(2px, 2px);
    }
    80% {
      transform: translate(2px, -2px);
    }
    100% {
      transform: translate(0);
    }
  }
`

export const HeroContent = styled.div`
  background: ${({ theme }) => theme.colors.gradients['200']};
  border-radius: 0.25rem;

  padding: 2.25rem 0.5rem 1.25rem;

  h1,
  p {
    display: block;
    max-width: 58.5%;
    margin-left: auto;
    opacity: 0;
  }

  h1 {
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.4;

    transform: translateY(-25%);
    animation: slide-down 300ms ease-in-out 300ms forwards;
  }

  p {
    font-size: 0.75rem;
    line-height: 1.4;
    margin-top: 0.25rem;

    transform: translateY(-50%);
    animation: slide-down 300ms ease-in-out 500ms forwards;
  }

  @media ${({ theme }) => theme.screens.md} {
    padding: 5rem 6rem 5.75rem;

    h1,
    p {
      max-width: 48%;
    }

    h1 {
      font-size: 2.5rem;
      font-weight: 500;
    }

    p {
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      line-height: 1;
    }
  }

  @keyframes slide-down {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
