import React from 'react';
import { Outlet } from 'react-router-dom';

const SharedProductsLayout = () => {
    return (
        <>
            <Outlet />
        </>
    );
};

export default SharedProductsLayout;
