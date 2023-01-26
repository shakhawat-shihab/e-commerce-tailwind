import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
    const [order, setOrder] = useState();
    const { id } = useParams();

    useEffect(() => {
        fetch('http://localhost:3000/order.json')
            .then(resp => resp.json())
            .then(json => {
                const filteredOrder = json.find(x => x.orderId === id)
                setOrder(filteredOrder);
            })
    }, []);

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className=' w-4/5  bg-[#FFFAF4] border rounded-lg '>
                <h3 className='text-center text-3xl font-bold my-8 underline'>
                    Order Detials
                </h3>
                <div className='grid grid-cols-12 gap-4 '>
                    <div className='col-span-6 px-6 pb-6 border-r-2 border-teal-800 border-dotted'>
                        <h2 className=' text-center text-2xl my-4 font-bold'>
                            Product
                        </h2>
                        <h2 className='text-xl font-semibold my-2'>
                            {order?.product}
                        </h2>
                        <h2 className='text-md my-2'>
                            Seller: {" "}
                            <span className='font-bold'>
                                {order?.seller}
                            </span>

                        </h2>
                        <h2 className='text-md'>
                            Unit Price: {(order?.price / order?.quantity).toFixed(2)}
                        </h2>
                    </div>
                    <div className='col-span-6 px-6 pb-6'>
                        <h2 className=' text-center text-2xl my-4 font-bold'>
                            Customer
                        </h2>
                        <h2 className='text-md font-semibold'>
                            Name: {order?.name}
                        </h2>
                        <h2 className='text-md'>
                            Mobile: {order?.customerMobile}
                        </h2>
                        <h2 className='text-md'>
                            Email: {order?.customerEmail}
                        </h2>
                        <h2 className='text-md'>
                            Shipping Address: {" "}
                            <span className='text-sm'>
                                {order?.shippingAddress}
                            </span>
                        </h2>
                        <h2 className='text-md'>
                            Quantity: {order?.quantity}
                        </h2>
                        <h2 className='text-md'>
                            Amount Paid: {order?.price}
                        </h2>

                    </div>

                </div>

            </div>
        </div>

    );
};

export default OrderDetails;