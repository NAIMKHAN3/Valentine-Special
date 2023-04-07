import React from 'react';

const ProductCard = ({ product }) => {
    const { name, image, price } = product;

    console.log(name, image, price)
    return (

        <div className=' border p-3 shadow-lg rounded-lg mx-auto'>
            <img className='w-96 h-56' src={image} alt="" />
            <div className='flex justify-between font-semibold my-2'>
                <p>Name :</p>
                <h1 className='font-semibold text-lg'>{name}</h1>
            </div>
            <div className='flex justify-between font-semibold my-2'>
                <p>Price :</p>
                <p className='font-semibold text-lg'>$ {price}</p>
            </div>
            <div>
                <button className="bg-[#2596be] text-white px-5 py-2 w-full rounded">Booking Now</button>
            </div>
        </div>

    );
};

export default ProductCard;