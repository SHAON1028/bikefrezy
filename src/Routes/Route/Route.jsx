import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import MainProduct from "../../Pages/Products/MainProduct/MainProduct";
import Products from "../../Pages/Products/ProductsData/Products";
import Errorpage from "../../Pages/shared/ErrorPage/Errorpage";

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
        
    ]
  }

])