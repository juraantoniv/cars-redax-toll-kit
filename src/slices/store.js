import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./redax.slices/carSlice";



const rootReducer =combineReducers({
    carReducer
})

const setupStore =()=>configureStore({
    reducer:rootReducer
})

export {
    setupStore
}