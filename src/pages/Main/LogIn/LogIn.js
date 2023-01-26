import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import './LogIn.css';

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();


    const onSubmit = (data) => {
        console.log(data);
    };


    return (
        <div className='flex h-screen items-center'>
            <div className='w-full grid place-items-center'>
                <div className='bg-[#FFFAF4] rounded-lg grid place-items-center px-20 py-10'>
                    <h1 className='mb-10 font-medium text-3xl'>Log In</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='space-y-3'>
                            <div className='flex flex-col items-start'>
                                <label htmlFor='mobile' className='ml-5'>
                                    Mobile Number
                                </label>
                                <input type='text'  {...register("mobile")} id='email' />
                            </div>
                            <div className='flex flex-col items-start'>
                                <label htmlFor='password' className='ml-5'>
                                    Password
                                </label>
                                <input
                                    type='password'
                                    id='password'
                                    {...register("password")}
                                />
                            </div>
                            <div >
                                <p className="text-right">
                                    Don't have an account?{" "}
                                    <span
                                        className='text-primary hover:underline cursor-pointer'
                                        onClick={() => navigate("/signup")}
                                    >
                                        Sign up
                                    </span>
                                </p>
                            </div>
                            <div className='relative !mt-8'>
                                <button
                                    type='submit'
                                    className='font-bold text-white py-3 rounded-full bg-primary w-full'
                                >
                                    Login
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
