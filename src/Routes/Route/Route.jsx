import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import Errorpage from "../../Pages/shared/ErrorPage/Errorpage";

export const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    errorElement:<Errorpage></Errorpage>,
    children:[
       
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        
    ]
  }

])