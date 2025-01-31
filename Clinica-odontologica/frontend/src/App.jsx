import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Funcionarios from "./pages/Funcionarios";
import Pacientes from "./pages/Pacientes";
import Login from "./pages/Login";
import Navbar from "./components/Navbar"; // Importe o Navbar

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Adicione o Navbar aqui */}
      <Routes>
        <Route path="/" element={<Login />} /> {/* Rota padrão */}
        <Route path="/funcionarios" element={<Funcionarios />} />
        <Route path="/pacientes" element={<Pacientes />} />--*
        <Route path="/pogin" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;