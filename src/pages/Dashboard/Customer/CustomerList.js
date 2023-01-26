import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const CustomerList = () => {
    const [customers, setCustomers] = useState();
    useEffect(() => {
        fetch('http://localhost:3000/customer.json')
            .then(resp => resp.json())
            .then(json => {
                console.log(json)
                setCustomers(json);
            })
    }, []);
    return (
        <div class='flex flex-col  items-center h-full w-full '>
            <div class='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
                <header class='px-5 py-4 border-b border-gray-100 flex justify-between'>
                    <div class='font-semibold text-indigo-700 text-md'>Customers</div>
                    <div>
                        <Link to={`customer/add`}
                            className='bg-indigo-500 rounded-full py-1 px-2 text-white flex-1 text-bold text-center'
                        >
                            <button
                                className='text-center text-sm px-2 '
                            >
                                Add Customer
                            </button>
                        </Link>
                    </div>
                </header>

                <div class='overflow-x-auto p-3'>
                    <table class='table-auto w-full'>
                        <thead class='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
                            <tr>
                                <th class='p-2'>
                                    <div class='font-semibold text-left'>Customer Name</div>
                                </th>
                                <th class='p-2'>
                                    <div class='font-semibold text-left'>Gender</div>
                                </th>
                                <th class='p-2'>
                                    <div class='font-semibold text-left'>Mobile</div>
                                </th>
                                <th class='p-2'>
                                    <div class='font-semibold text-left'>Email</div>
                                </th>
                                <th class='p-2'>
                                    <div class='font-semibold text-left'>Category</div>
                                </th>

                            </tr>
                        </thead>

                        <tbody class='text-sm divide-y divide-gray-100'>
                            {
                                customers?.map(({ name, gender, mobile, email, category, id }) => (
                                    <tr key={`${name}_${mobile}`}>
                                        <td class='p-2'>
                                            <Link to={`customer/${id}`}
                                                title={`Click to see details of ${name}`}
                                                className='underline'
                                            >
                                                <div class='font-medium text-gray-800'>{name}</div>
                                            </Link>
                                        </td>
                                        <td class='p-2'>
                                            <div class='text-left capitalize'>{gender}</div>
                                        </td>
                                        <td class='p-2'>
                                            <div class='text-left capitalize'>{mobile}</div>
                                        </td>
                                        <td class='p-2'>
                                            <div class='text-left font-medium text-indigo-500'>
                                                {email}
                                            </div>
                                        </td>
                                        <td class='p-2'>
                                            <div class='text-left font-medium text-zinc-800'>
                                                {category}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default CustomerList;