import { createGlobalStyle } from 'styled-components'
import { skeleton } from './skeleton'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: ${({ theme }) => theme.colors.dark['400']};
  }
  
  body * {
    color: ${({ theme }) => theme.colors.light['300']};
    font-size: 16px;
    font-weight: 400;
    
    outline: none;
  }
  
  body, button {
    font-family: 'Poppins', sans-serif;
  }
  
  input, textarea {
    font-family: 'Roboto', sans-serif;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({ theme }) => theme.colors.light['500']};
  }

  button:focus-visible, textarea:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.cake['800']};
  }

  a {
    text-decoration: none;
  }

  button, a {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5rem;

    cursor: pointer;
    transition: filter 0.2s;
  }

  a:hover {
    filter: brightness(0.9);
  }

  ::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.colors.dark['400']};
    height: 0.5rem;
    width: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(from ${({ theme }) => theme.colors.light['400']} r g b / 0.3);
    border-radius: 9999px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: rgb(255 255 255 / 0.8);
  }

  ${skeleton}
`
