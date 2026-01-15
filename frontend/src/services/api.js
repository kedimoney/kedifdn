import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust to your backend URL
});

// API functions
export const getPrograms = () => api.get('/programs');
export const getNews = () => api.get('/news');
export const submitContact = (data) => api.post('/contact', data);
export const submitVolunteer = (data) => api.post('/volunteer', data);

export default api;