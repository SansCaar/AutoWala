import axios from "axios";
export const api = axios.create({
  baseURL: "http://192.168.254.208:3001/v1/api",
});