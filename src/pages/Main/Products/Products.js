import React, { useEffect, useState } from 'react';
import ProductCard from '../../../components/ProductCard';
import { addToDb } from '../../../db';

const Products = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        fetch('http://localhost:3000/product.json')
            .then(resp => resp.json())
            .then(json => {
                console.log(json)
                setProducts(json);
            })
    }, []);
    return (
        <div>
            <div className='px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        products?.map(x => <ProductCard key={x?.key} product={x} eventHandlerAdd={addToDb} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;