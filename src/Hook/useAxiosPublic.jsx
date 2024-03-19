
import axios from 'axios';

const axiosSecure = axios.create({
    baseURL : "https://skill-forge-server.vercel.app"
})

const useAxiosPublic = () => {
    return axiosSecure
};

export default useAxiosPublic;