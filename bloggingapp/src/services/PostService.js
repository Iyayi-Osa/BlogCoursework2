import axios from 'axios';

const PostService = {
    getAllPosts: async () => {
        try {
            const response = await axios.get('/api/posts');
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },
    getPostById: async (postId) => {
        try {
            const response = await axios.get(`/api/posts/${postId}`);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    }
};

export default PostService;
