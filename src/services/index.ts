// apiService.js
import apiService from './api.service';
import mockService from './mock.service';

// Determine which service to use based on the environment variable
const service = import.meta.env.VITE_APP_MOCK_API === 'true' ? mockService : apiService;

export default service;
