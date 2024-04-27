import axios from 'axios';

const CategoryService = {
    getAllCategories: async () => {
        try {
            const response = await axios.get('/api/categories');
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    }
};

export default CategoryService;
