import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import CoffeeDetails from "./components/CoffeeDetails.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import Users from "./components/Users.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        loader: () => fetch('http://localhost:5000/coffee')
    },
    {
        path: 'addcoffee',
        element: <AddCoffee/>,
    },
    {
        path: 'updatecoffee/:id',
        element: <UpdateCoffee/>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)

    },
    {
        path: 'coffeedetails/:id',
        element: <CoffeeDetails/>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
    },
    {
        path: 'signup',
        element: <Signup></Signup>
    },
    {
        path: 'login',
        element:<Login></Login>
    },
    {
        path: 'users',
        element: <Users></Users>,
        loader: ()=> fetch(`http://localhost:5000/users`)
    }
]);


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router}/>
        </AuthProvider>
    </StrictMode>,
)
