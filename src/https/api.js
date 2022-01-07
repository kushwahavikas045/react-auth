import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
    },
});

//list of all endpoints
export const fetchAllDeveloper = () => api.get('/users');
export const fetchAllSchool = () => api.get('/schools');
export const fetchDetailsEducation = (id) => api.get(`/schools/${id}`);
export default api;