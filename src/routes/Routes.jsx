import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layoutes/Main";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layoutes/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layoutes/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'/',
                element:<Navigate to="/category/0"></Navigate>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/terms',
                element:<Terms></Terms>
            }
        ]
    },

   {
    path:'category',
    element:<Main></Main>,
    children:[
        {
            path:':id',
            element:<Category></Category>,
            loader:({params}) => fetch(`https://the-news-dragon-server-selfish199.vercel.app/catagories/${params.id}`)
        }
    ]
   },
   {
    path:'news',
    element:<NewsLayout></NewsLayout>,
    children:[
        {
            path:':id',
            element:<PrivateRoute><News></News></PrivateRoute>,
            loader:({params}) => fetch(`https://the-news-dragon-server-selfish199.vercel.app/news/${params.id}`)
        }
    ]
   }
])
export default router