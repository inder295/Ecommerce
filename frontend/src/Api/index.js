import axios from 'axios';

const Api = axios.create({
  baseURL: import.meta.env.MODE === "development" ? 'http://localhost:3000/api/v1': "/api",
  withCredentials: true,
});

export default Api;
