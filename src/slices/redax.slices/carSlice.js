import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";





let initialState={
    cars:[],
    prev:null,
    next:null,
    carForUpdate:null,
    errors:null,
    loading:null
}

const getAllAsync = createAsyncThunk(
    'carSlice/getAll',
    async ({page},{rejectWithValue})=>{

        try {
            const {data} = await carService.getAll(page)
            return data
        }
        catch (e){
            return rejectWithValue(e.response.data)

        }

    }
)


const deleteById = createAsyncThunk(
    'carSlice/delete',
    async ({id},thunkAPI)=>{

        try {
            await carService.deleteById(id)
            thunkAPI.dispatch(getAllAsync())

        } catch (e){

            return thunkAPI.rejectWithValue(e.response.data)
        }

    }

)


const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkAPI) => {
        try {
            await carService.createCar(car);
            thunkAPI.dispatch(getAllAsync({page: '1'}))
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }

    }
)


const updateById = createAsyncThunk(
    'carSlice/update',
    async ({id,car}, thunkAPI) => {
        try {
            await carService.updateById(id,car);
            thunkAPI.dispatch(getAllAsync())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }

    }
)




const carsSlice = createSlice({
    name: 'CarSlice',
    initialState,
    reducers: {
        carForUpdate:(state,action)=>{
            state.carForUpdate = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllAsync.fulfilled, (state, action) => {
                const {prev,next,items}=action.payload
                state.cars = items
                state.prev = prev
                state.next = next
                state.loading = false
            })
})


const {reducer:carReducer,actions:{carForUpdate}}=carsSlice

const carsActions ={
    getAllAsync,
    create,
    deleteById,
    carForUpdate,
    updateById
}

export {
    carReducer,
    carsActions
}