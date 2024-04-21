import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 0.25rem;

  & > div {
    background-color: #ccc;
    border-radius: 100%;

    display: inline-block;
    width: 0.75rem;
    height: 0.75rem;

    animation: bounce 1.4s infinite ease-in-out both;
  }

  & > div:nth-child(1) {
    animation-delay: -450ms;
  }

  & > div:nth-child(2) {
    animation-delay: -225ms;
  }

  @keyframes bounce {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`
