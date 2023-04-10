import axios from "axios";

export  const API = axios.create({
    baseURL: "https://explorer.notus.network/api/",
  });