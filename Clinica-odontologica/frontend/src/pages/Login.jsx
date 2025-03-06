import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import InputMask from 'react-input-mask';
import { cpf as cpfValidator } from 'cpf-cnpj-validator';
import loginImage from '../assets/imagens/LogoM.png'; // Imagem principal na tela de login

function Login() {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Verifica se o CPF é válido
    if (!cpfValidator.isValid(cpf)) {
      alert('CPF inválido. Por favor, insira um CPF válido.');
      return;
    }

    // Lógica de autenticação
    if (cpf === '707.515.350-10' && senha === '1234') {
      alert('Login realizado com sucesso!');
      navigate('/menu'); // Redireciona para a tela de Menu
    } else {
      alert('CPF ou senha incorretos.');
    }
  };

  const handleForgotPassword = () => {
    alert("Você clicou em 'Esqueceu a senha?'. Implemente o modal aqui.");
  };

  return (
    <div style={styles.container}>
      {/* Área da imagem principal */}
      <div style={styles.imageContainer}>
        <img src={loginImage} alt="Login Illustration" style={styles.image} />
      </div>

      {/* Área do formulário */}
      <div style={styles.formContainer}>
        <h1 style={styles.title} color='#333' >Bem-vindo ao Sistema Dentístico</h1>
        
        {/* Campo CPF */}
        <div style={styles.inputContainer}>
          <FaUser style={styles.icon} />
          <InputMask
            mask="999.999.999-99"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            style={styles.input}
          />
        </div>
        
        {/* Campo Senha */}
        <div style={styles.inputContainer}>
          <FaLock style={styles.icon} />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            style={styles.input}
          />
        </div>

        {/* Botão Login */}
        <button onClick={handleLogin} style={styles.button}>
          Login
        </button>

        {/* Esqueceu a senha */}
        <p style={styles.forgotPassword} onClick={handleForgotPassword}>
          Esqueceu a senha?
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#fafafa',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    maxWidth: '90%',
    maxHeight: '130%',
    objectFit: 'contain',
  },
  formContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: '24px',
    color: '#000000',
    marginBottom: '20px',
    textAlign: 'center',
   
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '4px',
    margin: '10px 0',
    width: '250px',
    padding: '10px',
  },
  icon: {
    marginRight: '10px',
    color: '#007BFF',
  },
  input: {
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    flex: 1,
    backgroundColor: '#fafafa',
  },
  button: {
    width: '270px',
    padding: '10px',
    backgroundColor: '#259df0',
    color: '#fafafa',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '8px',
  },
  forgotPassword: {
    marginTop: '10px',
    color: '#007BFF',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

export default Login;