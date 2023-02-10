import axios from "axios";
import {carService} from "./main.services/car.service";
import {authService} from "./main.services/auth.service";
import {createBrowserHistory} from "history";

const baseURL ='http://owu.linkpc.net/carsAPI/v2'

const history = createBrowserHistory();
export const axiosService = axios.create({baseURL})

axiosService.interceptors.request.use((config)=>{
        const access = authService.getAccessTokenKey()
        if (authService.isAuthenticated()){
                config.headers.Authorization=`Bearer ${access}`
        }
        return config
    }
)


let isRefreshing = false
axiosService.interceptors.response.use((configs)=>{
        return configs
},
    async (error)=>{
        const refresh =  authService.getRefreshTokenKey()
            if(error.response?.status===401 && refresh && !isRefreshing){
                    isRefreshing=true
                    try {
                        await authService.refresh(refresh)
                    }catch (e){

                        authService.deleteTokens()
                        history.replace('/login?expSession=true')
                    }
                isRefreshing = false;
                return  axiosService(error.config)
            }
        return Promise.reject(error)
    }
    )