import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/GlobalStyle.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import HomeCondomino from './pages/HomeCondomino'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeCondomino />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
