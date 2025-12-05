import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 15000,
});

// Attach token automatically
apiClient.interceptors.request.use(
  (config) => {
    const stored = localStorage.getItem("dealer_portal_auth");
    if (stored) {
      const { token } = JSON.parse(stored);
      if (token) config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Global error normalizer
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const normalized =
      error?.response?.data || { message: "Unexpected error occurred" };

    return Promise.reject(normalized);
  }
);

export default apiClient;
