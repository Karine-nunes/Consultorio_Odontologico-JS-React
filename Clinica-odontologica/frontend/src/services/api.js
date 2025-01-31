import axios from "axios";

const api = axios.create({
  baseURL: "/api", // Usa o proxy configurado no Vite
});

export const getFuncionarios = async () => {
  const response = await api.get("/funcionarios");
  return response.data;
};

export default api;