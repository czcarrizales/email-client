import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { InputProvider } from './InputContext.tsx'
import { MessageProvider } from './MessageContext.tsx'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MessageProvider>
      <InputProvider>
      <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </SkeletonTheme>
      </InputProvider>
    </MessageProvider>
  </React.StrictMode>,
)
