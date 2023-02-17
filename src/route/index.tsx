import {Routes, Route} from 'react-router-dom';
import Home from '../pages';
import DashBoard from '../pages/Dashboard';
const AppRouter = () =>{
    return(
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/dashboard" element={<DashBoard/>} />
    </Routes>)
}
export default AppRouter;