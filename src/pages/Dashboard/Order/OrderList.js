import React, { useEffect, useState } from 'react';

const OrderList = () => {
    // const [products, setProducts] = useState();

    useEffect(() => {
        fetch('./order.json')
            .then(resp => resp.json())
            .then(json => {
                console.log(json)
                // setProducts(json);
            })
    }, []);

    return (
        <div>
            <h1>Order List</h1>
        </div>
    );
};

export default OrderList;