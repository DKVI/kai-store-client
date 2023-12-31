import axios from "axios";
const baseURL = "http://localhost:8080";
const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
  },
});

export { baseURL, instance };
