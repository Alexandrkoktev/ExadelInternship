import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://carpool111.herokuapp.com',
    withCredentials: true
});

export default instance