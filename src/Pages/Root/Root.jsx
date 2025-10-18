import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../../Components/NavBar/NavBar';

const Root = () => {
    return (
        <div className='max-w-[1400px] mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;