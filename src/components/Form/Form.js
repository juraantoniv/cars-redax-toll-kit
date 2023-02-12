import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";
import {carsActions} from "../../slices/redax.slices/carSlice";
import {carValidator} from "../../validators/car.validator";

const Form = () => {
    const {carForUpdate,me}=useSelector(state => state.carReducer)
    const { register, handleSubmit,reset, formState: { errors,isValid },setValue } = useForm({mode:"all",resolver:joiResolver(carValidator)});
    const dispatch = useDispatch()

    const  create = async (car)=> {
        await dispatch(carsActions.create({car}))
        reset()
    }

    const  update = async (cargo)=> {
        await dispatch(carsActions.updateById({id: carForUpdate.id,car:cargo}))
        console.log(carForUpdate.id);
        console.log(cargo);
        reset()
    }

    useEffect(()=>{
          dispatch(carsActions.meId())
    },[])


    useEffect(()=>{

        dispatch()

    },[carForUpdate])

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate? update:create)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
               <button disabled={!isValid}>{carForUpdate? 'update':'create'}</button>
            </form>
            {me && JSON.stringify(me)}
        </div>
    );
};

export default Form;