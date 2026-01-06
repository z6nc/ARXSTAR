import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './main/components/Navbar/navbar'
import Footer from './main/components/Footer/footer'
import './css/index.css'
import App from './App'
import { Analytics } from '@vercel/analytics/react' 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />
        <App />
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
    <Analytics />
  </StrictMode>,
)
