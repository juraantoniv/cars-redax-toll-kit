import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../../slices/redax.slices/carSlice";

const Form = () => {
    const {carForUpdate}=useSelector(state => state.carReducer)
    const { register, handleSubmit,reset, formState: { errors,isValid },setValue } = useForm({mode:"all"});
    const dispatch = useDispatch()

    const  create = async (car)=> {
        await dispatch(carsActions.create({car}))
        reset()
    }

    const  update = async (id,car)=> {
        await dispatch(carsActions.update({id:carForUpdate.id,car}))
        reset()
    }

    useEffect(()=>{

        if (carForUpdate){
            setValue('brand',carForUpdate.brand,{shouldValidate:true})
            setValue('price',carForUpdate.price,{shouldValidate:true})
            setValue('year',carForUpdate.year,{shouldValidate:true})

        }
            dispatch(carsActions.getAllAsync)

    },[carForUpdate])

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate? update:create)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
               <button disabled={!isValid}>{carForUpdate? 'update':'create'}</button>
            </form>
        </div>
    );
};

export default Form;