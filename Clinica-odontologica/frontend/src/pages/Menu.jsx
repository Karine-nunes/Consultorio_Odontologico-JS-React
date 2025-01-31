import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Menu Principal</h1>
      <div style={styles.buttonContainer}>
        <Link to="/funcionarios" style={styles.button}>
          Funcionários
        </Link>
        <Link to="/pacientes" style={styles.button}>
          Pacientes
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#0d47a1',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
    textAlign: 'center',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#1565c0', // Cor ao passar o mouse
  },
};

export default Menu;