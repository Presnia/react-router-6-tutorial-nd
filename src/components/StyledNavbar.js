import React from 'react';
import { NavLink } from 'react-router-dom';

const StyledNavbar = () => {
    return (
        <nav className="navbar">
            <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
            >
                Home
            </NavLink>
            <NavLink
                to="about"
                className={({ isActive }) => (isActive ? 'active' : '')}
            >
                About
            </NavLink>
            <NavLink
                to="products"
                className={({ isActive }) => (isActive ? 'active' : '')}
            >
                Products
            </NavLink>
            <NavLink
                to="login"
                className={({ isActive }) => (isActive ? 'active' : '')}
            >
                Login
            </NavLink>
        </nav>
    );
};

export default StyledNavbar;
