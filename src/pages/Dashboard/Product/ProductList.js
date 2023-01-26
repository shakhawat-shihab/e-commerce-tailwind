import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GrEdit } from "react-icons/gr";


const ProductList = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('./product.json')
            .then(resp => resp.json())
            .then(json => {
                console.log(json)
                setProducts(json);
            })
    }, []);


    const { pathname } = useLocation();
    return (
        <div className='flex flex-col justify-center items-center h-full w-full '>
            <div className='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
                <header className='px-5 py-4 border-b border-gray-100'>
                    <div className='font-semibold text-gray-800'>Products</div>
                </header>

                <div className='overflow-x-auto p-3'>
                    <table className='table-auto w-full'>
                        <thead className='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
                            <tr>
                                <th></th>
                                <th className='p-2'>
                                    <div className='font-semibold text-left'>Name</div>
                                </th>
                                <th className='p-2'>
                                    <div className='font-semibold text-left'>Category</div>
                                </th>
                                <th className='p-2'>
                                    <div className='font-semibold text-left'>Brand</div>
                                </th>
                                <th className='p-2'>
                                    <div className='font-semibold text-left'>Stock</div>
                                </th>
                                <th className='p-2'>
                                    <div className='font-semibold text-left'>Price</div>
                                </th>
                                <th className='p-2'>
                                    <div className='font-semibold text-center'>Edit</div>
                                </th>
                                <th className='p-2'>
                                    <div className='font-semibold text-center'>Delete</div>
                                </th>
                            </tr>
                        </thead>

                        <tbody className='text-sm divide-y divide-gray-100'>
                            {
                                products?.map(({ name, category, brand, stock, price, key }) => (
                                    <tr className={key}>
                                        <td className='p-2'>
                                            <input type='checkbox' className='w-5 h-5' value='id-1' />
                                        </td>
                                        <td className='p-2'>
                                            <div className='font-medium text-gray-800'>{name}</div>
                                        </td>
                                        <td className='p-2'>
                                            <div className='text-left capitalize'>{category}</div>
                                        </td>
                                        <td className='p-2'>
                                            <div className='text-left capitalize'>{brand}</div>
                                        </td>
                                        <td className='p-2'>
                                            <div className='text-left capitalize'>{stock}</div>
                                        </td>
                                        <td className='p-2'>
                                            <div className='text-left capitalize'>{price}</div>
                                        </td>
                                        <td className='p-2'>
                                            <div className='text-left font-medium text-indigo-500'>
                                                {price}
                                            </div>
                                        </td>
                                        <td className='p-2'>
                                            <div className='flex justify-center'>
                                                <button>
                                                    <Link to={`${pathname}`}>
                                                        <GrEdit />
                                                    </Link>
                                                </button>
                                            </div>
                                        </td>
                                        <td className='p-2'>
                                            <div className='flex justify-center'>
                                                <button
                                                    onClick={() => {
                                                        // dispatch(deleteProduct(_id))
                                                        // console.log('delete clicked')
                                                    }}
                                                >
                                                    <svg
                                                        className='w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1'
                                                        fill='none'
                                                        stroke='currentColor'
                                                        viewBox='0 0 24 24'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                    >
                                                        <path
                                                            stroke-linecap='round'
                                                            stroke-linejoin='round'
                                                            stroke-width='2'
                                                            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                                                        ></path>
                                                    </svg>
                                                </button>
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

export default ProductList;