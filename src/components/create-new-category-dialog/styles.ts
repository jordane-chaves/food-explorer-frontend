import styled from 'styled-components'

export const Container = styled.div`
  display: none;
  justify-content: flex-end;

  position: fixed;
  inset: 0;
  z-index: 1000;

  &[data-dialog-is-open='true'] {
    display: flex;

    aside {
      animation: show 300ms forwards ease-in-out;
    }
  }

  @keyframes show {
    100% {
      transform: translate(0);
    }
  }
`

export const Overlay = styled.div`
  background: rgb(0 0 0 / 0.7);

  position: absolute;
  inset: 0;
`

export const Content = styled.aside`
  background: ${({ theme }) => theme.colors.dark['400']};
  border-left: 1px solid ${({ theme }) => theme.colors.dark['900']};

  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  max-width: 90%;
  padding: 2.5rem;

  transform: translateX(100%);
  transition: transform 300ms;
`

export const Header = styled.div`
  > h1 {
    font-size: 1.25rem;
    font-weight: 700;
  }

  > p {
    color: ${({ theme }) => theme.colors.light['600']};
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;

  > button {
    padding: 0.5rem 1.25rem;

    span {
      font-size: 0.875rem;
      line-height: 1;
    }

    div:has(svg) {
      height: 0.875rem;
      width: 0.875rem;
    }
  }
`
