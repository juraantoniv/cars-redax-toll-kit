import {axiosService} from "../api.Service";
import {urls} from "../urls";

const accessTokenKey ='access'
const refreshTokenKey ='refresh'

export const authService={

    login:async function (user){

        const response = await axiosService.post(urls.auth.login,user)

        if (response.status===200){

            this.setTokens(response.data)

        }
        return response
    },

    refresh: async function  (refresh){

        const response = await axiosService.post(urls.auth.refresh,{refresh})

        if (response.status === 200) {

            this.setTokens(response.data)
        }

        return response
    },
    me:()=>axiosService.get(urls.auth.me),


     setTokens:({access,refresh})=>{

        localStorage.setItem(accessTokenKey,access)
        localStorage.setItem(refreshTokenKey,refresh)
     },

    getAccessTokenKey:()=>localStorage.getItem(accessTokenKey),
    getRefreshTokenKey:()=>localStorage.getItem(refreshTokenKey),

    deleteTokens:()=>{
        localStorage.removeItem(accessTokenKey)
        localStorage.removeItem(refreshTokenKey)
    },

    isAuthenticated: () => !!localStorage.getItem(accessTokenKey)

}