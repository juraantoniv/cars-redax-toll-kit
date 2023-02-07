import axios from "axios";

const baseURL ='http://owu.linkpc.net/carsAPI/v1'


export const axiosService = axios.create({baseURL})