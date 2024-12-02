import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://192.168.172.229:3000', // Usa la IP local de tu máquina
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// axiosClient.get('/miEndpoint')
// axiosClient.get('miEndpoint')

export default axiosClient;
