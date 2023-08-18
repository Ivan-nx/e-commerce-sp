import { BrowserRouter } from 'react-router-dom'

import { CartProvider } from './contexts/CartContext'
import { SnackProvider } from './contexts/SnackContext'
import { AppRoutes } from './routes'

import { Normalize } from 'styled-normalize'
import { GlobalStyle } from './styles/global'
import { Theme } from './styles/Theme'

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <SnackProvider>
          <CartProvider>
            <AppRoutes />
            <GlobalStyle />
            <Normalize />
          </CartProvider>
        </SnackProvider>
      </Theme>
    </BrowserRouter>
  )
}
