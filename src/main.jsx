import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
import Home from "./pages/Website/Home.jsx";
import Landing from "./pages/LandingPage/Landing.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/sign-up",
        element: <Register />,
    },
    {
        path: "/home",
        element: <Home />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)