import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { UserProvider } from './context/UserContext'; // Importe o UserProvider
import Pacientes from './pages/Pacientes';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Navbar from './components/Navbar';
import UserMonitor from './components/UsuarioMonitor/UserMonitor'; // Importe o UserMonitor
import UserForm from './components/UsuarioMonitor/UserForm'; // Importe o UserForm

const App = () => {
  const location = useLocation(); // Obtém a rota atual

  return (
    <>
      {/* Exibe o Navbar apenas se estiver na tela de Menu */}
      {location.pathname === '/menu' && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} /> {/* Rota padrão */}
        <Route path="/menu" element={<Menu />} /> {/* Tela de Menu */}
        <Route path="/usuarios" element={<UserMonitor />} /> {/* Rota para o UserMonitor */}
        <Route path="/pacientes" element={<Pacientes />} /> {/* Rota para Pacientes */}
        <Route path="/login" element={<Login />} /> {/* Rota para Login */}
        <Route path="/cadastro-usuario" element={<UserForm />} /> {/* Rota para o UserForm */}
      </Routes>
    </>
  );
};

// Envolva o App com o Router e o UserProvider
export default function AppWrapper() {
  return (
    <UserProvider> {/* Envolve toda a aplicação com o UserProvider */}
      <Router> {/* Envolve a aplicação com o Router */}
        <App /> {/* Renderiza o App dentro do Router */}
      </Router>
    </UserProvider>
  );
}