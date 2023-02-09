import React from 'react';
import  css from './Header.module.css'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div className={css.Header}>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Register</Link>
        </div>
    );
};

export default Header;