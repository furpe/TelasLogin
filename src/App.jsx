import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Registros from './pages/Registros'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Login</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/registros">Registros</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/registros" element={<Registros />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
