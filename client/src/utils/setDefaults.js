import axios from 'axios';

const setDefaults = (token) => {
    if(process.env.NODE_ENV === "development") {
        axios.defaults.baseURL = 'http://localhost:5000';
    }
    if(token) {
        axios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete  axios.defaults.headers.common['x-auth-token'];
    }
    axios.defaults.headers.common['Content-Type'] = 'application/json';
}

export default setDefaults;
