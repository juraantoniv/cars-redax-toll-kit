import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";





let initialState={
    cars:[],
    carForUpdate:null,
    errors:null,
    loading:null
}

const getAllAsync = createAsyncThunk(
    'postSlice/getAll',
    async (_,{rejectWithValue})=>{

        try {
            const {data} = await carService.getAll()
            return data
        }
        catch (e){
            return rejectWithValue(e.response.data)

        }

    }
)

const carsSlice = createSlice({
    name:'CarSlice',
    initialState,
    reducers:{

    },
    extraReducers:{}
    }
)