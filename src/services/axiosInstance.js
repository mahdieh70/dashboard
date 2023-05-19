import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://apingweb.com/api/v3/",
});
export const axiosUserInstance = axios.create({
  baseURL: "https://apingweb.com/api/",
});
