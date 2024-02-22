import React from 'react'
import NavBar from './layouts/NavBar'
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <div className="h-full">
            <NavBar />      
            <Outlet/>
        </div>
    )
}

export default App;
