import MenuLateral from "./components/Menu"
import Card from "./components/Card/Card"
import Tela from "./components/Tela/Tela"
import Clock from "./components/Clock/Clock"

import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tela />}/>
        <Route path="/MenuLateral" element={<MenuLateral />}/>
        <Route path="/Card" element={<Card />}/>
        <Route path="/Clock" element={<Clock />}/>
      </Routes>
    </Router>

  );
}

export default App
