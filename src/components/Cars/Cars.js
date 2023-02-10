import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../../slices/redax.slices/carSlice";
import Car from "../Car/Car";

const Cars = () => {

    const dispatch = useDispatch()
    const {cars}=useSelector(state => state.carReducer)


    useEffect(()=>{

        dispatch(carsActions.getAllAsync())

    },[dispatch])

    return (
        <div>
            {/*{cars.map(car => <Car key={car.id} car={car}/>)}*/}
        </div>
    );
};

export default Cars;