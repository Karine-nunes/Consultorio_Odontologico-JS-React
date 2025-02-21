import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaFileMedical } from 'react-icons/fa'; // Ícones importados

function Menu() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Menu Principal</h1>
      <div style={styles.buttonContainer}>
        <Link to="/usuarios" style={styles.button}>
          <FaUser style={styles.icon} /> {/* Ícone de usuário */}
          <span style={styles.buttonText}>Usuário</span>
        </Link>
        <Link to="/pacientes" style={styles.button}>
          <FaFileMedical style={styles.icon} /> {/* Ícone de prontuário */}
          <span style={styles.buttonText}>Área do Paciente</span>
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
    height: '85vh',
    backgroundColor: '#f0f2f5',
    padding: '20px',
  },
  title: {
    fontSize: '32px',
    marginBottom: '40px',
    color: '#333',
    fontWeight: 'bold',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    width: '100%',
    maxWidth: '600px',
    justifyContent: 'center',
  },
  button: {
    padding: '20px',
    backgroundColor: '#ffffff',
    color: '#333',
    textDecoration: 'none',
    borderRadius: '12px',
    textAlign: 'center',
    fontSize: '18px',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    flex: 1,
    maxWidth: '250px',
  },
  icon: {
    fontSize: '24px',
    color: '#47a6ea',
  },
  buttonText: {
    flex: 1,
  },
};

export default Menu;