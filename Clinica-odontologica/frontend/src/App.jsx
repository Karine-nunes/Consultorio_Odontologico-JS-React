import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Pacientes from './pages/Pacientes';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Navbar from './components/Navbar';
import Usuario from './components/UsuarioMonitor/UserMonitor';
import UserMonitor from './components/UsuarioMonitor/UserMonitor';
import UserForm from './components/UsuarioMonitor/UserForm';

const App = () => {
  const location = useLocation(); // Obtém a rota atual

  return (
    <>
      {/* Exibe o Navbar apenas se estiver na tela de Menu */}
      {location.pathname === '/menu' && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} /> {/* Rota padrão */}
        <Route path="/menu" element={<Menu />} /> {/* Tela de Menu */}
        <Route path="usuarios" element={<UserMonitor />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro-usuario" element={<UserForm />} />
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

