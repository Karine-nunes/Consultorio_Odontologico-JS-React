import React, { createContext, useState } from 'react';

// Cria o contexto
export const UserContext = createContext();

// Provedor do contexto
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, nome: 'Igor', cpf: '047.978.141-95', email: 'user@apartamento.com', tipoAcesso: 'ADMIN', senha: '1234' },
    { id: 2, nome: 'Karine', cpf: '8817050813', email: 'user2@apartamento.com', tipoAcesso: 'FUNCIONARIO', senha: '1234' },
    { id: 3, nome: 'Marcos', cpf: '72827846992', email: 'user3@mailbox.com', tipoAcesso: 'MEDICO', senha: '1234' },
    // Adicione mais usuários conforme necessário
  ]);

  // Função para adicionar um novo usuário
  const addUser = (user) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
  };

  // Função para editar um usuário existente
  const editUser = (id, updatedUser) => {
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  // Função para autenticar um usuário
  const authenticateUser = (cpf, senha) => {
    return users.find(user => user.cpf === cpf && user.senha === senha);
  };

  return (
    <UserContext.Provider value={{ users, addUser, editUser, authenticateUser }}>
      {children}
    </UserContext.Provider>
  );
};