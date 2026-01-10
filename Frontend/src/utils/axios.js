import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // Send cookies (for refresh token and access token)
});

let isLoggingOut = false;

// Response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/users/refresh-token")
    ) {
      originalRequest._retry = true;
      try {
        await axios.post(
          `${import.meta.env.VITE_API_URL}/users/refresh-token`,
          {},
          { withCredentials: true }
        );
        // No need to update localStorage or Authorization header
        return api(originalRequest);
      } catch (refreshError) {
        if (!isLoggingOut) {
          isLoggingOut = true;
          await api.post("/users/logout");
          window.location.href = "/login";
        }
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;