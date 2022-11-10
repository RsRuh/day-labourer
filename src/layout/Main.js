import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Component/Shared/Footer';
import Header from '../Component/Shared/Header';

const Main = () => {
    {
        const {pathname} = useLocation()
        useEffect(() =>{
            window.scrollTo({behavior: "smooth", top:0})
        }, [pathname]);
    }
    return (
        <div>
            <Header></Header>
            <div className='min-h-screen'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;