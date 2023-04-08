import React from 'react';
import { useDispatch } from 'react-redux';
import { addBooking } from '../../app/features/Product/ProductSlice';
import { RiDeleteBin6Line } from "react-icons/ri";

const ProductCard = ({ product }) => {
    const { name, image, price, quantity } = product;

    const location = window.location.pathname

    const dispatch = useDispatch();

    return (

        <div className=' border p-3 shadow-lg rounded-lg mx-auto relative'>
            {
                location === '/booking' &&
                <div className='bg-[#2596be] rounded-full grid place-items-center text-white absolute top-0 right-0 h-8 w-8'><p>{product.quantity}</p></div>
            }
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
                {
                    location === '/booking' ? <button onClick={() => dispatch(addBooking(product))} className="bg-[#e24646] text-white px-5 py-2 w-full rounded flex justify-center items-center font-semibold">Remove <RiDeleteBin6Line className='ml-3' size={20}></RiDeleteBin6Line></button> :
                        <button onClick={() => dispatch(addBooking(product))} className="bg-[#2596be] text-white px-5 py-2 w-full rounded">Booking Now</button>
                }


            </div>
        </div>

    );
};

export default ProductCard;