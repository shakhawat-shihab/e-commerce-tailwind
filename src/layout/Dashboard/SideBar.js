import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className='col-span-2 bg-indigo-200 h-[calc(100vh-25px)] p-5 rounded-lg'>
            <ul className='flex gap-3  flex-col h-full'>
                <li className="text-xl mb-4">Admin Dashboard</li>
                <li >
                    <NavLink
                        // className={(navData) => (navData.isActive ? 'underline py-2 text-gray-700 ' : ' py-2 hover:bg-indigo-500')}
                        className='py-4'
                        to="/dashboard"
                    >
                        Customer
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        // className={(navData) => (navData.isActive ? 'underline py-2 text-gray-700 ' : ' py-2 hover:bg-indigo-500')}
                        className='py-4'
                        to="order"
                    >
                        Order
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        // className={(navData) => (navData.isActive ? 'underline py-2 text-gray-700 ' : ' py-2 hover:bg-indigo-500')}
                        className='py-4'
                        to="product"
                    >
                        Product
                    </NavLink>
                </li>
                <li className='mt-auto'>
                    <Link to='/'> Back to Home </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
