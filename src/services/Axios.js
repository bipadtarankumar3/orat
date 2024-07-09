import axios from "axios";
import { getToken } from "../auth/auth";


export const BASE_URL = process.env.REACT_APP_BASE_URL;
//export const BASE_URL = 'https://billing.vishnukhad.com/api/';
export const localAxios = axios.create({
    baseURL:BASE_URL,
});

export const privateAxios = axios.create({
    baseURL:BASE_URL
})

privateAxios.interceptors.request.use((config) =>{
        const token = getToken()
        
        if (token) {
            //console.log(token)
            //config.headers.common.Authorization=`Bearer ${token}`
            config.headers.Authorization =`Bearer ${token}`

            //console.log(config);
        } 
        return config
    },(error) => Promise.reject(error)
);