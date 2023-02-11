import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../../slices/redax.slices/carSlice";
import Car from "../Car/Car";
import {useSearchParams} from "react-router-dom";

const Cars = () => {

    const dispatch = useDispatch()
    const {cars,prev,next}=useSelector(state => state.carReducer)
    const [query,setQuery] = useSearchParams({page:'1'})


    useEffect(()=>{

        dispatch(carsActions.getAllAsync({page:query.get('page')}))

    },[dispatch,query])

    return (
        <div>
            <div>
                <button disabled={!prev} onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}>prev</button>
                <button disabled={!next} onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}>next</button>
                <button  onClick={()=>setQuery(query=>({page:+query.get('page')+2}))}>{+next+1}</button>
            </div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;