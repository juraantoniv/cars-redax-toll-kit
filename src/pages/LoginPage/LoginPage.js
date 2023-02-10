import React from 'react';
import {useForm} from "react-hook-form";
import {authService, carService} from "../../services";

const LoginPage = () => {
    const {register, handleSubmit} = useForm();

    const login = async (userCredential)=> {

        try {

            const {data} = await authService.login(userCredential)
            console.log(data);
            console.log(userCredential);

        }catch (e){

            console.log(e.response.data);
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