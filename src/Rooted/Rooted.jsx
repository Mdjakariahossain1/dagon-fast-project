import Root from "../leout/Root/Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Regstar from "../pages/Regstar/Regstar";

const rooted = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'login',
                element: <Login></Login>
            },
            {
                path: 'Regstar',
                element: <Regstar></Regstar>
            }
        ]
    }
]);

export default rooted;