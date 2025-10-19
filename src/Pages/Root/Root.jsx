import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../../Components/NavBar/NavBar';
import { Toaster } from 'react-hot-toast';


const Root = () => {
    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <div data-theme="light" className=''>
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
        </>

    );
};

export default Root;