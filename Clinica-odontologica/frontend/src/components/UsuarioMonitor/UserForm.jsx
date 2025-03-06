import React, { useState } from "react";
import "./UserForm.css"; // Importando o arquivo CSS

const CadastroUsuario = () => {
  const [usuario, setUsuario] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    email: "",
    endereco: "",
    bairro: "",
    cidade: "",
    tiposAcesso: [],
    usuarioAtivo: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "tiposAcesso") {
      setUsuario((prevUsuario) => {
        const tiposAcesso = [...prevUsuario.tiposAcesso];
        if (checked) {
          tiposAcesso.push(value);
        } else {
          const index = tiposAcesso.indexOf(value);
          if (index > -1) {
            tiposAcesso.splice(index, 1);
          }
        }
        return { ...prevUsuario, tiposAcesso };
      });
    } else {
      setUsuario({
        ...usuario,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Usuário salvo/atualizado:", usuario);
  };

  const handleEdit = () => {
    console.log("Editar usuário");
  };

  return (
    <div className="cadastro-container">
      <h2>CADASTRO DE USUÁRIO</h2>
      <form onSubmit={handleSubmit}>
        <label>
          NOME:
          <input
            type="text"
            name="nome"
            value={usuario.nome}
            onChange={handleChange}
          />
        </label>
        <label>
          CPF:
          <input
            type="text"
            name="cpf"
            value={usuario.cpf}
            onChange={handleChange}
          />
        </label>
        <label>
          TELEFONE:
          <input
            type="text"
            name="telefone"
            value={usuario.telefone}
            onChange={handleChange}
          />
        </label>
        <label>
          E-MAIL:
          <input
            type="email"
            name="email"
            value={usuario.email}
            onChange={handleChange}
          />
        </label>
        <label>
          ENDEREÇO:
          <input
            type="text"
            name="endereco"
            value={usuario.endereco}
            onChange={handleChange}
          />
        </label>
        <label>
          BAIRRO:
          <input
            type="text"
            name="bairro"
            value={usuario.bairro}
            onChange={handleChange}
          />
        </label>
        <label>
          CIDADE:
          <input
            type="text"
            name="cidade"
            value={usuario.cidade}
            onChange={handleChange}
          />
        </label>
        <div className="checkbox-group">
          <label>TIPO DE ACESSO:</label>
          <label>
            <input
              type="checkbox"
              name="tiposAcesso"
              value="CADASTROS"
              checked={usuario.tiposAcesso.includes("CADASTROS")}
              onChange={handleChange}
            />
            CADASTROS
          </label>
          <label>
            <input
              type="checkbox"
              name="tiposAcesso"
              value="EXAMES"
              checked={usuario.tiposAcesso.includes("EXAMES")}
              onChange={handleChange}
            />
            EXAMES
          </label>
          <label>
            <input
              type="checkbox"
              name="tiposAcesso"
              value="PAGAMENTOS"
              checked={usuario.tiposAcesso.includes("PAGAMENTOS")}
              onChange={handleChange}
            />
            PAGAMENTOS
          </label>
          <label>
            <input
              type="checkbox"
              name="tiposAcesso"
              value="ANAPINESE"
              checked={usuario.tiposAcesso.includes("ANAPINESE")}
              onChange={handleChange}
            />
            ANAPINESE
          </label>
        </div>
        <label>
          USUÁRIO ATIVO:
          <input
            type="checkbox"
            name="usuarioAtivo"
            checked={usuario.usuarioAtivo}
            onChange={handleChange}
          />
        </label>
        <div className="button-group">
          <button type="button" onClick={handleEdit}>
            Editar
          </button>
          <button type="submit">Cadastrar/Salvar</button>
        </div>
      </form>
    </div>
  );
};

export default CadastroUsuario;