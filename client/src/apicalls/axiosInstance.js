import axios from 'axios';
export const axiosInstance = axios.create({
    // baseURL: 'https://nitian-restore.onrender.com',
    headers : {
         authorization : `Bearer ${localStorage.getItem('token')}`
    }
})