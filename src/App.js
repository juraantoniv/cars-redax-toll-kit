
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";

import {AuthLayout, MainLayout} from "./layouts";
import {CarsPage, LoginPage, RegisterPage} from "./pages";


export const App=()=> {
  return (
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={'/cars'}/>}/>

          <Route element={<AuthLayout/>}>
            <Route path={'cars'} element={<CarsPage/>}/>
          </Route>

          <Route path={'login'} element={<LoginPage/>}/>
          <Route path={'register'} element={<RegisterPage/>}/>
        </Route>

      </Routes>

  );
}


