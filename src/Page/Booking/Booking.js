import React from 'react';
import ProductCard from '../Product/ProductCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Booking = () => {
    const bookedProduct = useSelector(state => state.product.bookingProducts)

    if (!bookedProduct) {
        return <h1 className='text-center text-xl font-semibold my-10'>Your booking is empty. Please <Link to="/product"><span className='text-indigo-600'>Booking Now</span></Link></h1>
    }

    return (
        <div className='max-w-6xl mx-auto my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    bookedProduct.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Booking;