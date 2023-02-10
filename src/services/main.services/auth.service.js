import {axiosService} from "../api.Service";
import {urls} from "../urls";

export const authService={
    login:(user)=>axiosService.post(urls.auth.login,user),
    refresh:(refresh)=>axiosService.post(urls.auth.refresh,{refresh}),
    me:()=>axiosService.get(urls.auth.me)



}