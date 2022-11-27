import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import MainProduct from "../../Pages/Products/MainProduct/MainProduct";
import Products from "../../Pages/Products/ProductsData/Products";
import Errorpage from "../../Pages/shared/ErrorPage/Errorpage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    errorElement:<Errorpage></Errorpage>,
    children:[
       
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>,
            
        },
        {
            path:'/products/:category',
            element:<MainProduct></MainProduct>,
            loader: ({params}) => fetch(`http://localhost:5000/products/${params.category}`)
        },
        {
            path:'/blog',
            element:<Blog></Blog>,
        }
        
    ]
  },
  {
    path:'/dashboard',
    errorElement:<Errorpage></Errorpage>,
    element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
        {
            path:'/dashboard',
            element: <Dashboard></Dashboard>
        }
    ]
}

])