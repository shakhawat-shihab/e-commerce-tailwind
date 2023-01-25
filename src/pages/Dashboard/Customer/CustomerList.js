import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomerList = () => {
    return (
        <div>
            <h1>Customers</h1>
            <NavLink to="customer/54">Click</NavLink>
        </div>
    );
};

export default CustomerList;