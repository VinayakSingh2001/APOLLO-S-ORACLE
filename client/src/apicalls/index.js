import axios from 'axios';

const axiosInstace = axios.create({
    headers: {
        Authorization : `Bearer ${localStorage.getItem('token')}`
    }
});

export default axiosInstace;