
const cars = '/cars'
const auth = '/auth'

 export const urls = {
    auth:{
        login:auth,
        refresh:`${auth}/refresh`,
        me:`${auth}/me`
    },
    cars:{
        cars,
        byId:(id)=>`${cars}/${id}`
    },
     users:'/users'
}