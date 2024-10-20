import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/GlobalStyle.css'

import { register } from 'swiper/element/bundle';
register();

import 'swiper/css';
import 'swiper/css/pagination'; //bolinhas
import 'swiper/css/scrollbar'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
