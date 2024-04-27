import axios from 'axios';

const ApiService = axios.create({
    baseURL: 'http://localhost:5230', 
    headers: {
        'Content-Type': 'application/json'
    }
});

export default ApiService;
