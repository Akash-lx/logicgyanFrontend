import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "https://logicmitra-api.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const apiMethods = {
  get: async (url, config = {}) => {
    try {
      const response = await api.get(url, config);
      return response;
    } catch (error) {
      return error;
    }
  },
  post: async (url, data, config = {}) => {
    try {
      const response = await api.post(url, data, config);
      return response;
    } catch (error) {
      return error;
    }
  },
  put: async (url, data, config = {}) => {
    try {
      const response = await api.put(url, data, config);
      return response;
    } catch (error) {
      return error;
    }
  },
  delete: async (url, config = {}) => {
    try {
      const response = await api.delete(url, config);
      return response;
    } catch (error) {
      return error;
    }
  },
};

export default apiMethods;
