import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layout/Main";
import AddService from "../../Pages/AddService";
import Blog from "../../Pages/Blog";
import Error from "../../Pages/Error";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login";
import MyReviews from "../../Pages/MyReviews";
import Reviews from "../../Pages/Reviews";
import Services from "../../Pages/Services";
import Signup from "../../Pages/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>,
                loader: () => fetch('https://youtube-promoter-server.vercel.app/three-services')
            },
            {
                path: '/my-reviews', element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/services/:id', element: <Reviews></Reviews>,
                loader: ({ params }) => fetch(`https://youtube-promoter-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/add-service', element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/blog', element: <Blog></Blog>
            },
            {
                path: '/services', element: <Services></Services>,
                loader: () => fetch('https://youtube-promoter-server.vercel.app/services')
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/signup', element: <Signup></Signup>
            },
        ]
    },
    {
        path: '*', element: <Error></Error>
    }
])