import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/GlobalStyle.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import HomeCondomino from './pages/HomeCondomino'
import Bicicleta from './pages/Bicicleta'
import Feedback from './pages/Feedback'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeCondomino />}/>
        <Route path='/bicicletas/:id' element={<Bicicleta/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/feedback' element={<Feedback />}/>
        <Route path='*' element={<HomeCondomino />}/> {/*o * serve pra redirecionar qualquer endpoint desconhecido para a page escolhida*/}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
