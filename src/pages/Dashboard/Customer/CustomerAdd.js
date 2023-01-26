import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { FaChevronLeft } from "react-icons/fa";


const CustomerAdd = () => {
    const { handleSubmit, register, control } = useForm();
    const term = useWatch({ control, name: "term" });
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div>
            <div className='pt-14'>

                <div className='flex justify-center items-center overflow-auto p-10'>
                    <form
                        className='bg-secondary-400 shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between'
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <h1 className='w-full text-2xl text-primary mb-5'>Add Customer</h1>

                        <div className='flex flex-col w-full max-w-xs'>
                            <label className='mb-2' htmlFor='firstName'>
                                First Name
                            </label>
                            <input type='text' id='firstName' {...register("firstName")} />
                        </div>

                        <div className='flex flex-col w-full max-w-xs'>
                            <label className='mb-2' htmlFor='lastName'>
                                Last Name
                            </label>
                            <input type='text' id='lastName' {...register("lastName")} />
                        </div>

                        <div className='flex flex-col w-full max-w-xs'>
                            <label className='mb-2' htmlFor='email'>
                                Email
                            </label>
                            <input
                                type='email' id='email'
                                {...register("email")} />
                        </div>

                        <div className='flex flex-col w-full max-w-xs'>
                            <h1 className='mb-3'>Gender</h1>
                            <div className='flex gap-3'>
                                <div>
                                    <input
                                        type='radio'
                                        id='male'
                                        {...register("gender")}
                                        value='male'
                                    />
                                    <label className='ml-2 text-lg' for='male'>
                                        Male
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type='radio'
                                        id='female'
                                        {...register("gender")}
                                        value='female'
                                    />
                                    <label className='ml-2 text-lg' for='female'>
                                        Female
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type='radio'
                                        id='other'
                                        {...register("gender")}
                                        value='other'
                                    />
                                    <label className='ml-2 text-lg' for='other'>
                                        Other
                                    </label>
                                </div>
                            </div>
                        </div>

                        <hr className='w-full mt-2 bg-black' />

                        <div className='flex flex-col w-full max-w-xs'>
                            <label className='mb-2' htmlFor='mobile'>
                                Mobile Number
                            </label>
                            <input type='text' {...register("mobile")} id='mobile' />
                        </div>


                        <div className='flex flex-col w-full max-w-xs'>
                            <label className='mb-2' htmlFor='address'>
                                Address
                            </label>
                            <input
                                type='text'
                                {...register("address")}
                                id='address'
                            />
                        </div>

                        <div className=' w-full mt-3'>
                            <div className='flex  w-full max-w-xs'>
                                <input
                                    className='mr-3'
                                    type='checkbox'
                                    {...register("term")}
                                    id='terms'
                                />
                                <label for='terms'>I agree to terms and conditions</label>
                            </div>
                        </div>
                        <br />
                        <button disabled={!term} className='bg-indigo-500 rounded-full py-2 text-white flex-1 text-bold text-center w-1/2' type='submit'>
                            Save
                        </button>


                    </form>
                </div>
            </div >
        </div >
    );
};

export default CustomerAdd;