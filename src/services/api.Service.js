import axios from "axios";

const baseURL ='http://owu.linkpc.net/carsAPI/v2'


export const axiosService = axios.create({baseURL})