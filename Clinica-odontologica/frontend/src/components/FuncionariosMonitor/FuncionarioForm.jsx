import React, { useState, useEffect } from "react";
import { getFuncionarios } from "../services/api";

const FuncionariosMonitor = () => {
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    const fetchFuncionarios = async () => {
      const data = await getFuncionarios();
      setFuncionarios(data);
    };
    fetchFuncionarios();
  }, []);

  return (
    <div>
      <h2>Funcionários</h2>
      <ul>
        {funcionarios.map((funcionario) => (
          <li key={funcionario.id}>{funcionario.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default FuncionariosMonitor;