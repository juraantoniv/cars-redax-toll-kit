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


const create = createAsyncThunk(
    'postSlice/getAll',
    async ({car},thunkAPI)=>{

        try {
            await carService.create(car)
            thunkAPI.dispatch(carService.getAll())

        }
        catch (e){
            return thunkAPI.rejectWithValue(e.response.data)

        }

    }
)


const carsSlice = createSlice({
    name: 'CarSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllAsync.fulfilled, (state, action) => {
                state.cars = action.payload
                state.loading = false
            })
})


const {reducer:carReducer,actions:{}}=carsSlice

const carsActions ={
    getAllAsync,
    create
}

export {
    carReducer,
    carsActions
}