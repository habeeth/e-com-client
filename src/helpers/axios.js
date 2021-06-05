import axios from 'axios';
import { api } from '../uriConfig';

const axiosInstance = axios.create(
    {
        baseURL: api,
        // headers: {
        //     Authorization: ''
        // },
    }
);

export default axiosInstance;