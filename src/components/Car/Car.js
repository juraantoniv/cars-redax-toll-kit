import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../../slices/redax.slices/carSlice";
import {useForm} from "react-hook-form";

const Car = ({car}) => {

    const {id,brand,year,price}=car
    const dispatch = useDispatch()




    return (
        <div>
            <div>brand :{brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>dispatch(carsActions.carForUpdate(car))}>Update</button>
            <button onClick={()=>dispatch(carsActions.deleteById({id}))}>Delete</button>
        </div>
    );
};

export default Car;