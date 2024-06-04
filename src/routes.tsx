import { RouteObject } from "react-router-dom";
//Pages and components
import LandingPage from "./Pages/LandingPage";
import ErrorPage from "./Pages/ErrorPage";
import Categories from "./Components/Categories";
import ContactUs from "./Pages/ContactUs";
import AccountPage from "./Pages/AccountPage";
import ShoppingCart from "./Components/ShoppingCart";

const routes:RouteObject[] =[
    {
        path:"/",
        element:<LandingPage/>,
        errorElement:<ErrorPage/>,
        children:[
            
            {path:"categories",element:<Categories/>},
            {path:"contactUs",element:<ContactUs/>},
            {path:"account",element:<AccountPage/>},
            {path:"shoppingCart",element:<ShoppingCart/>},

        ]
    }
]
export default routes