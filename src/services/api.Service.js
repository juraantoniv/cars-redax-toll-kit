import axios from "axios";
import {carService} from "./main.services/car.service";
import {authService} from "./main.services/auth.service";

const baseURL ='http://owu.linkpc.net/carsAPI/v2'


export const axiosService = axios.create({baseURL})

axiosService.interceptors.request.use((config)=>{
        const access = authService.getAccessTokenKey()
        if (authService.isAuthenticated()){
                config.headers.Authorization=`Bearer ${access}`
        }
        return config
    }
)