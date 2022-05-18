import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const root = document.querySelector('#root')

if (!root) {
  throw new Error('Oups ... il manque la balise root dans votre index.html')
}

createRoot(root).render(<App />)
