import axios from 'axios';
import { TIME_OUT } from "../../constants";

export const axiosInstance = axios.create({
    baseURL: 'https://newsapi.org/',
    timeout: TIME_OUT,
})
