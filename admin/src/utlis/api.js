    
    // This is an Interceptor
    
    import axios from 'axios';

    const api = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
    });

    api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token'); // Get token from storage

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    export default api;