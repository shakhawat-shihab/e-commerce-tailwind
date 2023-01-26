import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdCancel } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";
const OrderList = () => {
    const [orders, setOrders] = useState();

    useEffect(() => {
        fetch('http://localhost:3000/order.json')
            .then(resp => resp.json())
            .then(json => {
                // console.log(json)
                setOrders(json);
            })
    }, []);

    return (
        <div className='flex flex-col  items-center h-full w-full '>
            <div className='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
                <header className='px-5 py-4 border-b border-gray-100'>
                    <div className='font-semibold text-indigo-700 text-md'>Orders</div>
                </header>

                <div className='overflow-x-auto p-3'>
                    <table className='table-auto w-full'>
                        <thead className='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
                            <tr>
                                <th className='p-2'>
                                    <div className='font-semibold text-left'>Order Id</div>
                                </th>
                                <th className='p-2'>
                                    <div className='font-semibold text-left'>Product</div>
                                </th>
                                <th className='p-2'>
                                    <div className='font-semibold text-left'>Seller</div>
                                </th>
                                <th className='p-2'>
                                    <div className='font-semibold text-left'>Customer</div>
                                </th>
                                <th className='p-2'>
                                    <div className='font-semibold text-left'>quantity</div>
                                </th>
                                <th className='p-2'>
                                    <div className='font-semibold text-left'>price</div>
                                </th>
                                <th className='p-2'>
                                    <div className='font-semibold text-center'>Status</div>
                                </th>

                            </tr>
                        </thead>

                        <tbody className='text-sm divide-y divide-gray-100'>
                            {
                                orders?.map(({ product, name, seller, mobile, quantity, status, price, orderId }) => (
                                    <tr className={orderId}>
                                        <td className='p-2'>
                                            <Link to={`${orderId}`}
                                                title={`Click to see details of order ${orderId}`}
                                                className='underline'
                                            >
                                                <div class='font-medium text-gray-800'>{orderId}</div>
                                            </Link>
                                        </td>
                                        <td className='p-2'>
                                            <div className='font-medium text-gray-800'>{product}</div>
                                        </td>
                                        <td className='p-2'>
                                            <div className='text-left capitalize'>{seller}</div>
                                        </td>
                                        <td className='p-2'>
                                            <div className='text-left capitalize'>{name}</div>
                                        </td>
                                        <td className='p-2'>
                                            <div className='text-left text-indigo-500 '>{quantity}</div>
                                        </td>
                                        <td className='p-2'>
                                            <div className='text-left '>{price}</div>
                                        </td>

                                        <td className='p-2'>
                                            <div className='flex justify-center'>
                                                {
                                                    status === "approved" || status == "denied"
                                                        ?
                                                        <p >
                                                            {
                                                                status
                                                            }
                                                        </p>
                                                        :
                                                        <>
                                                            <button
                                                                className='bg-green-600 px-1 rounded py-1 text-bold text-center '
                                                                title='Approve'
                                                            >
                                                                <BsCheckCircleFill className='text-md text-white' />
                                                            </button>
                                                            <button
                                                                className='ml-2 bg-red-500 px-0.5 rounded  py-1 text-bold text-center '
                                                                title='Deny'
                                                            >
                                                                <MdCancel className='text-md text-white' />
                                                            </button>
                                                        </>
                                                }
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

export default OrderList;