import { Routes, Route } from 'react-router-dom';
import Landing from "./pages/LandingPage/Landing.jsx";
import Login from "./pages/Auth/Login.jsx";

function App() {
    return (
        <Routes>
            <Route path='/' element={ <Landing /> } />
            <Route path='/login' element={ <Login /> } />
        </Routes>
    )
}

export default App;