import { css } from 'styled-components'

export const skeleton = css`
  &.loading {
    pointer-events: none;

    .loading-item {
      --first-color: ${({ theme }) => theme.colors.light['500']};
      --second-color: ${({ theme }) => theme.colors.light['700']};

      background: linear-gradient(
        -90deg,
        var(--first-color) 0%,
        var(--second-color) 50%,
        var(--first-color) 100%
      );

      background-size: 300% 300%;

      border-radius: 0.25rem;
      border-color: rgba(0, 0, 0, 0);
      color: rgba(0, 0, 0, 0);
      user-select: none;
      cursor: wait;

      animation: skeleton 1.2s ease-in-out infinite;
    }

    .loading-item * {
      visibility: hidden !important;
    }

    .loading-item:empty::after,
    .loading-item *:empty::after {
      content: '';
    }
  }

  @keyframes skeleton {
    from {
      background-position: 150% 0%;
    }

    to {
      background-position: 0% 0%;
    }
  }
`
