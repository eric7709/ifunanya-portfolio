import axios from "axios";

const baseURL = "http://192.168.149.200:8080/api/v1";

const api = axios.create({
  baseURL,
  withCredentials: false,
});

export default api;
