import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { filterProduct, setProduct } from '../../app/features/Product/ProductSlice';

const Product = () => {
    const dispatch = useDispatch();
    const { filter, products } = useSelector(state => state.product)

    const activeClass = 'bg-[#962927] text-white border-white';

    useEffect(() => {
        fetch("giftitem.json")
            .then(res => res.json())
            .then(data => dispatch(setProduct(data)))
    }, [dispatch])

    let content;

    if (products.length) {
        content = products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
    }
    if (products.length && filter.length) {
        content = products.filter(product =>
            filter.includes(product.cetegory)
        ).map(product => <ProductCard key={product._id} product={product}></ProductCard>)
    }


    return (
        <div className='max-w-6xl mx-auto my-10'>
            <div className='mb-10 flex justify-end gap-5'>
                <button className={`border px-3 py-2 hover:bg-[#962927] hover:text-white transition duration-300 rounded-full font-semibold ${filter === 'showpiece' && activeClass}`}
                    onClick={() => dispatch(filterProduct("showpiece"))}
                >Showpiece</button>
                <button className={`border px-3 py-2 hover:bg-[#962927] hover:text-white transition duration-300 rounded-full font-semibold ${filter === 'teddy' && activeClass}`}
                    onClick={() => dispatch(filterProduct("teddy"))}
                >Teddy</button>
                <button onClick={() => dispatch(filterProduct("diary"))} className={`border px-3 py-2 hover:bg-[#962927] hover:text-white transition duration-300 rounded-full font-semibold ${filter === 'diary' && activeClass}`}
                >Diary</button>
                <button onClick={() => dispatch(filterProduct("pen"))} className={`border px-3 hover:bg-[#962927] transition duration-300 hover:text-white py-2 rounded-full font-semibold ${filter === 'pen' && activeClass}`}
                >Pen</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    content
                }
            </div>

        </div>
    );
};

export default Product;