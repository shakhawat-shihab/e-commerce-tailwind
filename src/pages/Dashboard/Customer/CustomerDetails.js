import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CustomerDetails = () => {
    const { id } = useParams();
    const [customer, setCustomer] = useState({});
    useEffect(() => {
        fetch('http://localhost:3000/customer.json')
            .then(resp => resp.json())
            .then(json => {
                // console.log(json)
                const customer = json.find(x => x.id == id)
                setCustomer(customer);
            })
    }, []);

    return (
        <div>
            <div className='pt-14'>

                <div className='flex justify-center items-center overflow-auto p-10'>
                    <div
                        className='bg-secondary-400 shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between'
                    >
                        <h1 className='w-full text-2xl text-primary mb-5'>Customer Information</h1>

                        <div className='flex flex-col w-full max-w-xs text-xl'>
                            <p>
                                Name: <span className='pl-2 text-md'>{customer?.name}</span>
                            </p>
                        </div>

                        <div className='flex flex-col w-full max-w-xs text-xl'>
                            <p>
                                Email:  <span className='pl-2 text-sm'>{customer?.email}</span>
                            </p>
                        </div>

                        <div className='flex flex-col w-full max-w-xs text-xl'>
                            <h1 className='mb-3'>
                                Gender:  <span className='pl-2 text-sm capitalize'>{customer?.gender}</span>
                            </h1>
                        </div>

                        <div className='flex flex-col w-full max-w-xs text-xl'>
                            <h1 className='mb-3'>
                                Mobile Number:  <span className='pl-2 text-sm'>{customer?.mobile}</span>
                            </h1>
                        </div>

                        <div className='flex flex-col w-full max-w-xs  text-md'>
                            Address: <span className='pl-2 text-sm'>{customer?.address}</span>
                        </div>

                    </div>



                </div>
            </div >
        </div >
    );
};

export default CustomerDetails;