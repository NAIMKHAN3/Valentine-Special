import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Product = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch("giftitem.json")
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div className='max-w-6xl mx-auto my-10'>
            <div className='mb-10 flex justify-end gap-5'>
                <button className={`border px-3 py-2 rounded-full font-semibold`}
                >All</button>
                <button className={`border px-3 py-2 rounded-full font-semibold`}
                >Pen</button>
                <button className={`border px-3 py-2 rounded-full font-semibold `}
                >Diary</button>
                <button className={`border px-3 py-2 rounded-full font-semibold `}

                >Teddy</button>
                <button className={`border px-3 py-2 rounded-full font-semibold `}

                >Showpiece</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>

        </div>
    );
};

export default Product;