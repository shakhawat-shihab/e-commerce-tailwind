import React, { useEffect, useState } from 'react';
import ProductCard from '../../../components/ProductCard';
import { getDataFromDb, removeFromDb } from '../../../db';

const Cart = () => {
    const [products, setProducts] = useState();
    const [reload, setReload] = useState(false);
    useEffect(() => {
        fetch('./product.json')
            .then(resp => resp.json())
            .then(json => {
                console.log(json)
                if (json.length >= 1) {
                    const cartObject = getDataFromDb();
                    console.log("db ", cartObject);
                    const array = []
                    for (const key in cartObject) {
                        const res = json.find(x => x.key === key);
                        array.push(res);
                    }
                    setProducts(array);
                }
            })
    }, [reload]);

    const changeCart = () => {
        setReload(!reload);
    }
    return (
        <div className='px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products?.map(x => <ProductCard key={x?.key} product={x} eventHandlerRemove={removeFromDb} changeCart={changeCart} />)
                }
            </div>
        </div>
    );
};

export default Cart;