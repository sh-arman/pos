import axios from 'axios';
import axiosInterceptor from './axiosInterceptor';
import { environment } from './environment';

const wampServer = environment.URL + ':8001/api/';
const axiosApi = axios.create({
    baseURL: wampServer,
    withCredentials: true,  // Include credentials (e.g., cookies) in requests
    headers: {
        'Content-Type': 'application/json',  // Set the content type for JSON requests
    },
});

axiosInterceptor.setupInterceptors(axiosApi, true, false);
export default axiosApi;
