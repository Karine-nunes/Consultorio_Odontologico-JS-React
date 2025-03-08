import React, { useState, useContext } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../context/UserContext"; // Importe o UserContext
import './MonitorUser.css';

const UserMonitor = () => {
  const { users } = useContext(UserContext); // Use os usuários do contexto
  const [filterNome, setFilterNome] = useState('');
  const [filterCpf, setFilterCpf] = useState('');
  const navigate = useNavigate();

  // Redireciona para a tela de cadastro com os dados do usuário para edição
  const handleEdit = (user) => {
    console.log("Usuário para edição:", user); // Depuração
    navigate('/cadastro-usuario', { state: { user } });
  };

  // Redireciona para a tela de cadastro para adicionar um novo usuário
  const handleNewUser = () => {
    navigate('/cadastro-usuario'); // Sem dados, indica que é um novo cadastro
  };

  const handleFilter = () => {
    console.log('Filtrar');
  };

  // Filtra os usuários com base nos critérios
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
                  <IconButton className="edit-button" onClick={() => handleEdit(user)}>
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