import {createSlice} from "@reduxjs/toolkit";


let initialState={
    cars:[],
    carForUpdate:null,
    errors:null,
    loading:null
}

const carsSlice = createSlice({
    name:'CarSlice',
    initialState,
    reducers:{

    },
    extraReducers:{}
    }
)