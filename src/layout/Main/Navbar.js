import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';


const Navbar = () => {
    const location = useLocation();
    console.log(location)
    return (
        <nav className='h-14 bg-indigo-200 rounded-md m-2 px-5'>
            <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900'>
                <div>
                    <h1>
                        <NavLink to='/'>RepliQ</NavLink>
                    </h1>
                </div>
                <div className='px-auto flex justify-between'>
                    <li>
                        <NavLink
                            className={(navData) => (navData.isActive ? 'underline px-5 py-2 ' : 'px-5 py-2')}
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) => (navData.isActive ? 'underline px-5 py-2 ' : 'px-5 py-2')}
                            to="/products"
                        >
                            Product
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) => (navData.isActive ? 'underline px-5 py-2 ' : 'px-5 py-2')}
                            to="/cart"
                        >
                            Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) => (navData.isActive ? 'underline px-5 py-2 ' : 'px-5 py-2')}
                            to="/dashboard"
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) => (navData.isActive ? 'underline px-5 py-2 ' : 'px-5 py-2')}
                            to="/login"
                        >
                            Log In
                        </NavLink>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;