import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {

    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const registerUser = async (user) => {

        try {

            await carService.create(user)
            navigate('/login')

        } catch (e) {

            setError(e.response.data)
        }
    };

    return (
        <div>

            <form onSubmit={handleSubmit(registerUser)}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>Register</button>

            </form>

            {error&&<div>{JSON.stringify(error)}</div>}
        </div>
    );
};

export {
    RegisterPage
}