import axios from 'axios';

const config = {
	withCredentials: false,
	headers: {
		'Content-Type': 'application/json',
	},
};

export const API_URL = '/api';

export const baseApi = axios.create({
	baseURL: `${API_URL}`,
	...config,
});
