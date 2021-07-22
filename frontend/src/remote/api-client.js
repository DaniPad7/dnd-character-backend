import axios from 'axios';

const apiUrl = 'http://localhost:5000'

export const apiClient = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type' : 'application/json'
    }
})