import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";
import { BiListPlus } from "react-icons/bi";
import { BsCartXFill } from "react-icons/bs";
import Rating from 'react-rating';

const ProductCard = (props) => {
    // const {history}=useHis
    const { pathname } = useLocation();
    const { product } = props;
    return (
        <div className='shadow-lg relative rounded-md border p-3 flex flex-col text-indigo-900'>
            {/* {
                pathname.includes("cart")
                &&
                (
                    <div className='rounded-full grid place-items-center absolute top-2 right-2 bg-indigo-500 text-white h-8 w-8 font-bold '>
                        <p> {product?.quantity} </p>
                    </div>
                )
            } */}
            <div className='h-52 w-52 mx-auto'>
                <img src={product.img} alt={product.model} />
            </div>

            <h1 className='font-bold text-center'>{product.name}</h1>
            <div className='my-4 flex align-center justify-between'>
                <div>
                    <p className='font-semibold mb-3'>
                        <Rating
                            className='text-yellow-500 mr-2'
                            emptySymbol="fa fa-star-o "
                            fullSymbol="fa fa-star "
                            initialRating={product?.star}
                            readonly
                        />
                        ({product?.starCount})
                    </p>
                </div>
                <div>
                    <p className='pr-4 font-bold text-indigo-700'>
                        {product?.price} <span className='text-red-500'>$</span>
                    </p>
                </div>
            </div>

            {/* <div className=' flex-1'>
                <ul className='space-y-2'>
                    {
                        product?.keyFeature?.map((feature) => {
                            return (
                                <li key={feature} className='text-sm '>
                                    {feature}
                                </li>
                            );
                        })
                    }
                </ul>
            </div> */}
            <div className='flex gap-2 mt-5'>
                <Link to={`/products/${product?.key}`}
                    className='bg-indigo-500 rounded-full py-1 px-2 text-white flex-1 text-bold text-center'
                >
                    <button
                        className='text-center '
                    >
                        View Details
                    </button>
                </Link>


                {
                    !pathname.includes("cart") && (
                        <button
                            title='Add to Cart'
                            className='bg-indigo-500  py-1 px-2 rounded-full'
                            onClick={() => {
                                props.eventHandlerAdd(product?.key);
                            }}
                        >
                            <BiListPlus className='text-white' />
                        </button>
                    )
                }



                {
                    pathname.includes("cart") && (
                        <button
                            title='Add to Cart'
                            className='bg-red-500  py-1 px-2 rounded-full'
                            onClick={() => {
                                props.eventHandlerRemove(product?.key);
                                props.changeCart();
                            }}
                        >
                            <MdDeleteForever className='text-white' />
                        </button>
                    )
                }

            </div>
        </div>
    );
};

export default ProductCard;