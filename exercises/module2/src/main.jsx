import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const titre= 'Mon titre'
const message = "You are a master in the art of clicking !"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App titre={titre} message={message}/>
  </StrictMode>,
)
