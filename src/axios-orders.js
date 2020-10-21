import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-46e71.firebaseio.com/'
});

export default instance;