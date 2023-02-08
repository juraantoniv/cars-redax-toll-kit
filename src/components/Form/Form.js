import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {carsActions} from "../../slices/redax.slices/carSlice";

const Form = () => {

    const { register, handleSubmit,reset, formState: { errors,isValid },setValue } = useForm({mode:"all"});
    const dispatch = useDispatch()

    const  submit = async (data)=> {
        await dispatch(carsActions.create({data}))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price',{valueAsNumber:true}) }/>
                <input type="text" placeholder={'year'} {...register('year',{valueAsNumber:true})}/>
               <button disabled={!isValid}>Save</button>
            </form>
        </div>
    );
};

export default Form;