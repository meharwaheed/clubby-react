import { Routes, Route } from 'react-router-dom';
import Landing from "./pages/LandingPage/Landing.jsx";
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
import Home from "./pages/Website/Home.jsx";

function App() {
    return (
        <Routes>
            <Route path='/' element={ <Landing /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/sign-up' element={ <Register /> } />
            <Route path='/home' element={ <Home/> } />
        </Routes>
    )
}

export default App;