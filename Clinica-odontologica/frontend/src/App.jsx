import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Funcionarios from './pages/Funcionarios';
import Pacientes from './pages/Pacientes';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Navbar from './components/Navbar';

const App = () => {
  const location = useLocation(); // Obtém a rota atual

  return (
    <>
      {/* Exibe o Navbar apenas se estiver na tela de Menu */}
      {location.pathname === '/menu' && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} /> {/* Rota padrão */}
        <Route path="/menu" element={<Menu />} /> {/* Tela de Menu */}
        <Route path="/funcionarios" element={<Funcionarios />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

// Envolva o App com o Router
export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
};

