import styled from 'styled-components'

import HeroImg from '@/assets/hero.png'

export const Container = styled.div`
  background: url(${HeroImg}) no-repeat;
  background-position: center top -15rem;
  background-size: contain;

  display: grid;
  place-items: center;

  height: 100vh;
  width: 100%;

  padding: 2rem;

  @media ${({ theme }) => theme.screens.md} {
    background-position: right -10rem center;
    background-size: auto;
  }
`

export const Content = styled.main`
  border-radius: 1rem;
  background: rgba(0, 0, 0, 0.1);
  box-shadow:
    0px -1px 1px 0px rgba(255, 255, 255, 0.1) inset,
    0px 1px 1px 0px rgba(255, 255, 255, 0.3) inset,
    0px 8px 4px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(0.5rem);

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  padding: 2rem;

  > h1 {
    color: ${({ theme }) => theme.colors.light['100']};
    font-size: 3rem;
    font-weight: 700;
  }

  > p {
    font-size: 1.25rem;

    margin-top: 1rem;
    margin-bottom: 3rem;
  }
`
