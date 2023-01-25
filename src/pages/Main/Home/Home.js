import React, { useEffect, useState } from 'react';


const Home = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        fetch('./data.json')
            .then(resp => resp.json())
            .then(json => {
                console.log(json)
                setProducts(json);
            })
    }, []);
    return (
        <div>

        </div>
    );
};

export default Home;