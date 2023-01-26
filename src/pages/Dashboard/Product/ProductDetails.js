import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';
import { GrWaypoint } from "react-icons/gr";


const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    useEffect(() => {
        fetch('http://localhost:3000/product.json')
            .then(resp => resp.json())
            .then(json => {
                const filteredProduct = json?.find(x => x.key === id);
                console.log('filteredProduct == ', filteredProduct)
                setProduct(filteredProduct);
            })
    }, []);
    return (
        <div className='grid grid-cols-12 p-3 gap-3 px-8'>
            <div className='col-span-6 w-full  rounded-lg ' >
                <div className='px-8 py-4 border rounded'>
                    <img src={product?.img} alt='product' width='100%' />
                </div>
            </div>

            <div className='col-span-6 w-full bg-gray-100 rounded-lg px-8 py-4'>
                <h2 className='text-2xl font-bold py-4'>
                    {
                        product?.name
                    }
                </h2>
                <div className='my-3'>
                    {
                        product?.features?.map(x => {
                            return (<div className='flex my-2 items-center'>
                                <GrWaypoint className='text-teal-800' />
                                <span className='pl-3 text-md'>{x?.description} {x.value} </span>
                            </div>)
                        })
                    }
                </div>
                <div className='my-5'>
                    <p className='font-semibold my-3'>
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
                    <p className='font-semibold my-3'>
                        In Stock {product?.stock} Pcs.
                    </p>
                </div>

                <div className='my-4 flex justify-start'>
                    <p className='text-xl'>
                        Unit Price:
                        <span className='font-bold'>
                            {" " + product?.price} $
                        </span>
                    </p>
                    <p className='text-xl pl-5'>
                        +
                        <span className='font-bold'>
                            {" " + product?.shipping} $
                        </span>
                        (shipment)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;