import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 2rem;

  height: 100dvh;
  width: 100%;
`

export const LogoWrapper = styled.div`
  max-width: 300px;
  width: 100%;

  > img {
    width: 100%;
  }
`
