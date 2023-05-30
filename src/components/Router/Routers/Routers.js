import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Appointment from "../../Pages/Appointment/Appointment";
import Signup from "../../Pages/REgister/Signup";
import Login from "../../Pages/REgister/Login";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import DashBoard from "../../Pages/Dashboard/DashBoard";

const routers=createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/appointment',
                element:<PrivateRouter><Appointment/></PrivateRouter>
            },
            {
                path:'/signup',
                element:<Signup/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/',
                element:<Home/>
            },
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRouter><DashBoard/></PrivateRouter>
    }
])
export default routers;