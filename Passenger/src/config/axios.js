import axios from "axios";
export const instance = axios.create({
  baseURL: "http://192.168.1.68/auto/v1/api/",
  withCredentials: true,
});