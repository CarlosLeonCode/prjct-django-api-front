import axios from 'axios';

// TODO put into .env.local
const API_URL = 'http://127.0.0.1:8000/api/v1'

export const fetchMovieByName = async (name) => {
    try{
        const response = await axios.get(`${API_URL}/movies/?name=${name}`);
        return response.data;
    }catch (error) {
        console.error('Error fetching movies:', error.request);
        throw error;
    }
}

export default [fetchMovieByName]
