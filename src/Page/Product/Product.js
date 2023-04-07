import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Product = () => {
    const [products, setProduct] = useState([]);
    console.log(products)

    useEffect(() => {
        fetch("giftitem.json")
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>

        </div>
    );
};

export default Product;