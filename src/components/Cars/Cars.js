import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../../slices/redax.slices/carSlice";

const Cars = () => {

    const dispatch = useDispatch()
    const {cars}=useSelector(state => state.carReducer)


    useEffect(()=>{

        dispatch(carsActions.getAllAsync())

    },[dispatch])

    return (
        <div>
            {JSON.stringify(cars)}
        </div>
    );
};

export default Cars;