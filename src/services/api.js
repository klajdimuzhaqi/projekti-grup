const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const propertyAPI = {
    getAllProperties: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/properties`);
            if (!response.ok) throw new Error('API Error');
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            return [];
        }
    },

    searchProperties: async (filters) => {
        try {
            const params = new URLSearchParams(filters);
            const response = await fetch(`${API_BASE_URL}/properties/search?${params}`);
            if (!response.ok) throw new Error('Search Error');
            return await response.json();
        } catch (error) {
            console.error('Search Error:', error);
            return [];
        }
    }
};
