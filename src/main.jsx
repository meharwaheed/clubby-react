import React from 'react'
import ReactDOM from 'react-dom/client'
import Landing from './pages/LandingPage/Landing.jsx'
import './index.css'
import Login from "./pages/Auth/Login.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Login/>
  </React.StrictMode>,
)
