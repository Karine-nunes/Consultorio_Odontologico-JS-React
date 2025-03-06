import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate
import './MonitorUser.css';

const UserMonitor = () => {
  const [users, setUsers] = useState([
    { id: 1, nome: 'Igor', cpf: '55486441053', email: 'user@apartamento.com', tipoAcesso: 'ADMIN' },
    { id: 2, nome: 'Karine', cpf: '8817050813', email: 'user2@apartamento.com', tipoAcesso: 'FUNCIONARIO' },
    { id: 3, nome: 'Marcos', cpf: '72827846992', email: 'user3@mailbox.com', tipoAcesso: 'MEDICO' },
    // Adicione mais usuários conforme necessário
  ]);

  const [filterNome, setFilterNome] = useState('');
  const [filterCpf, setFilterCpf] = useState('');
  const navigate = useNavigate(); // Hook para navegação

  const handleEdit = (id) => {
    console.log('Editar usuário com ID:', id);
    navigate('/cadastro-usuario'); // Redireciona para a tela de cadastro de usuário
  };

  const handleNewUser = () => {
    navigate('/cadastro-usuario'); // Redireciona para a tela de cadastro de usuário
  };

  const handleFilter = () => {
    // A filtragem já é feita automaticamente pelo estado
    console.log('Filtrar');
  };

  const filteredUsers = users.filter(user =>
    user.nome.toLowerCase().includes(filterNome.toLowerCase()) &&
    user.cpf.includes(filterCpf)
  );

  return (
    <Paper className="user-monitor-container">
      <h1 className="page-title">Monitor de Usuários</h1>

      <Button variant="contained" className="new-user-button" onClick={handleNewUser}>
        Novo
      </Button>

      <div className="filter-container">
        <TextField
          label="Filtrar por Nome"
          variant="outlined"
          value={filterNome}
          onChange={(e) => setFilterNome(e.target.value)}
          className="filter-input"
          size="small"
        />
        <TextField
          label="Filtrar por CPF"
          variant="outlined"
          value={filterCpf}
          onChange={(e) => setFilterCpf(e.target.value)}
          className="filter-input"
          size="small"
        />
        <Button variant="contained" className="filter-button" onClick={handleFilter}>
          Filtrar
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table className="user-table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>CPF</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Tipo de Acesso</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.nome}</TableCell>
                <TableCell>{user.cpf}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.tipoAcesso}</TableCell>
                <TableCell>
                  <IconButton className="edit-button" onClick={() => handleEdit(user.id)}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default UserMonitor;