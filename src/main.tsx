import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from './contexts/auth/provider'
import { CartProvider } from './contexts/cart/provider'
import { Routes } from './routes'
import GlobalStyle from './styles/global'
import { theme } from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CartProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
