import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://max-burger-98fdd.firebaseio.com/'
});

export default instance;