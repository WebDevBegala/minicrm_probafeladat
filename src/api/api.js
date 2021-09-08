import axios from "axios";
const API_URL = 'http://localhost:3000/';

export const fetchStoreDetail = (params) => axios.get(`${API_URL}store`,{params});
export const fetchComments = (params) => axios.get(`${API_URL}comments`,{params});
export const createComments = (params) => axios.post(`${API_URL}comments`,params);