import React from 'react';
import {useForm} from "react-hook-form";
import {authService} from "../../services";
import {useNavigate} from "react-router-dom";


const LoginPage = () => {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate()

    const login = async (userCredential)=> {

        try {
            await authService.login(userCredential)
            navigate('/cars')

        }catch (e){


        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(login)}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="password" placeholder={'password'} {...register('password')}/>
                <button>login</button>
            </form>
        </div>
    );
};

export {
    LoginPage
}