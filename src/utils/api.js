import axios from 'axios';

//URL de l'api pour récupérer la data avec axios

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export default api;