import React from 'react';
import { useForm } from 'react-hook-form';

const ProductAdd = () => {

    const { handleSubmit, register, control } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='flex justify-center items-center h-full my-6'>
            <form
                className='shadow-lg p-10 rounded-md  max-w-3xl  bg-white'
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1 className=' text-2xl font-bold text-center mb-5'> Add Product</h1>
                <div className='grid grid-cols-12 gap-3 ' >
                    <div className='col-span-6 flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='name'>
                            Name
                        </label>
                        <input type='text' id='name' {...register("name")} />
                    </div>
                    <div className='col-span-6 flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='image'>
                            Image
                        </label>
                        <input type='text' name='image' id='image' {...register("image")} />
                    </div>
                    <div className='col-span-6 flex flex-col w-full max-w-xs'>
                        <label className='mb-3' htmlFor='seller'>
                            Seller
                        </label>
                        <input type='text' id='seller' {...register("seller")} />
                    </div>
                    <div className=' col-span-6 flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='price'>
                            Unit Price
                        </label>
                        <input type='text' name='price' id='price' {...register("price")} />
                    </div>
                    {/* <div className='col-span-6 flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='category'>
                            Category
                        </label>
                        <input type='text' name='category' id='category' {...register("category")} />
                    </div> */}
                </div>

                <div className='grid grid-cols-12 gap-3 my-4' >
                    <div className='col-span-6'>
                        <label className='mb-2' htmlFor='Feature1'>
                            Key Feature 1 Name
                        </label>
                        <input
                            className='w-full'
                            type='text'
                            name='keyFeature1Name'
                            id='keyFeature1Name'
                            {...register("keyFeature1Name")}
                        />
                    </div>
                    <div className='col-span-6'>
                        <label className='mb-2' htmlFor='Feature1'>
                            Key Feature 1 Description
                        </label>
                        <input
                            className='w-full'
                            type='text'
                            name='keyFeature1'
                            id='keyFeature1'
                            {...register("keyFeature1")}
                        />
                    </div>
                </div >

                <div className='grid grid-cols-12 gap-3 my-4' >
                    <div className='col-span-6'>
                        <label className='mb-2' htmlFor='Feature1'>
                            Key Feature 2 Name
                        </label>
                        <input
                            className='w-full'
                            type='text'
                            name='keyFeature2Name'
                            id='keyFeature2Name'
                            {...register("keyFeature2Name")}
                        />
                    </div>
                    <div className='col-span-6'>
                        <label className='mb-2' htmlFor='Feature1'>
                            Key Feature 2 Description
                        </label>
                        <input
                            className='w-full'
                            type='text'
                            name='keyFeature2'
                            id='keyFeature2'
                            {...register("keyFeature2")}
                        />
                    </div>
                </div >


                <div className='grid grid-cols-12 gap-3 my-4' >
                    <div className='col-span-6'>
                        <label className='mb-2' htmlFor='Feature3'>
                            Key Feature 3 Name
                        </label>
                        <input
                            className='w-full'
                            type='text'
                            name='keyFeature3Name'
                            id='keyFeature3Name'
                            {...register("keyFeature3Name")}
                        />
                    </div>
                    <div className='col-span-6'>
                        <label className='mb-2' htmlFor='Feature3'>
                            Key Feature 3 Description
                        </label>
                        <input
                            className='w-full'
                            type='text'
                            name='keyFeature3'
                            id='keyFeature3'
                            {...register("keyFeature3")}
                        />
                    </div>
                </div >


                <div className='grid grid-cols-12 gap-3 my-4' >
                    <div className='col-span-6'>
                        <label className='mb-2' htmlFor='Feature4'>
                            Key Feature 4 Name
                        </label>
                        <input
                            className='w-full'
                            type='text'
                            name='keyFeature4Name'
                            id='keyFeature4Name'
                            {...register("keyFeature4Name")}
                        />
                    </div>
                    <div className='col-span-6'>
                        <label className='mb-2' htmlFor='Feature4'>
                            Key Feature 4 Description
                        </label>
                        <input
                            className='w-full'
                            type='text'
                            name='keyFeature4'
                            id='keyFeature4'
                            {...register("keyFeature4")}
                        />
                    </div>
                </div >




                <div className='flex justify-center items-center w-full'>
                    <button
                        className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                        type='submit'
                    >
                        Submit
                    </button>
                </div>
            </form >
        </div >
    );
};

export default ProductAdd;