import React from 'react';
import {Routes, Route,Navigate} from 'react-router-dom';
import { useLogin } from '../context/useLogin';
import Home from '../pages';
import DashBoard from '../pages/Dashboard';
const AppRouter = () =>{
    const {state}=useLogin()
    return(
    <Routes>
    <Route path="/" element={<Home/>} /> 
    <Route path="/dashboard" element={state.login?<DashBoard/>:<Navigate to="/"/>} />
    </Routes>)
}
export default AppRouter;