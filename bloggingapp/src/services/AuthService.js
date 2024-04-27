import axios from 'axios';

const AuthService = {
    login: async (email, password) => {
        try {
            const response = await axios.post('/api/login', { email, password });
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },
    register: async (name, email, password) => {
        try {
            const response = await axios.post('/api/register', { name, email, password });
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    }
};

export default AuthService;
