import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Funcionarios from "./pages/Funcionarios";
import Pacientes from "./pages/Pacientes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/funcionarios" element={<Funcionarios />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/" element={<Funcionarios />} /> {/* Rota padrão */}
      </Routes>
    </Router>
  );
};

export default App;