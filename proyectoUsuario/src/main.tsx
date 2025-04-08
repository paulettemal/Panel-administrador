import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Ruta from './route/Ruta'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Ruta />
  </StrictMode>,
)
