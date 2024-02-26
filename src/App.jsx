import React, {useEffect} from 'react'
import NavBar from './layouts/NavBar'
import { Outlet } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS styles
import Footer from './layouts/Footer';

const App = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000, // values from 0 to 3000, with step 50ms
        });
    }, []);
    
    return (
        <div className="h-full">
            <NavBar />      
            <Outlet />
            <Footer/>
        </div>
    )
}

export default App;
