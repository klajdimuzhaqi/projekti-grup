export const config = {
    useMockData: process.env.NODE_ENV === 'development',
    apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:5000/api'
};
