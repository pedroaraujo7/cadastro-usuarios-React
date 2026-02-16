import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './Styles/GlobalStyles'
import Home from './pages/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/>
    <Home />
  </StrictMode>,
)
