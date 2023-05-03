import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import RecipesPage from "../Layout/RecipesPage";
import Recipes from "../Pages/Recipes/Recipes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/chefs')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path:'/recipes',
        element: <RecipesPage></RecipesPage>,
        children:[
            {
                path:':id',
                element: <Recipes></Recipes>,
                loader: ({params}) => fetch(`http://localhost:5000/recipes/${params.id}`)
            }
        ]
    }

])

export default router;