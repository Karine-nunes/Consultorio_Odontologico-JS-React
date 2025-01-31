const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rotas de exemplo
app.get("/api/funcionarios", (req, res) => {
  res.json([{ id: 1, nome: "João Silva", cpf: "123.456.789-00", funcao: "Dentista", status: "Ativo" }]);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});