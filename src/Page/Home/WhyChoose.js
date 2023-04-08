import React from 'react';
import { RiHeartsLine } from 'react-icons/ri'
import { FaClipboardList, FaStreetView, FaDraftingCompass } from 'react-icons/fa'

const WhyChoose = () => {
    return (
        <div className='my-10 max-w-6xl mx-auto'>
            <h1 className='text-center text-[#962927] font-semibold text-4xl'>Why Choose Valentine Special</h1>
            <p className='text-center font-semibold text-gray-500 my-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-3'>
                <div className=' bg-neutral-200 rounded-md p-7 mt-10 shadow-md'>
                    <span className='text-5xl text-[#962927]'><RiHeartsLine /></span>
                    <h1 className='text-xl text-[#962927] my-3 font-semibold'>35+ Year Experience</h1>
                    <p className='text-gray-600'>Sed ut perspiciatis unde omnis iste na voluptatem accusantium doloremque laudantium</p>
                </div>
                <div className=' bg-neutral-200 rounded-md p-7 mt-10 shadow-md'>
                    <span className='text-5xl text-[#962927]'><FaDraftingCompass /></span>
                    <h1 className='text-xl text-[#962927] my-3 font-semibold'>Trusted by 20k</h1>
                    <p className='text-gray-600'>Sed ut perspiciatis unde omnis iste na voluptatem accusantium doloremque laudantium</p>
                </div>
                <div className=' bg-neutral-200 rounded-md p-7 mt-10 shadow-md'>
                    <span className='text-5xl text-[#962927]'><FaStreetView /></span>
                    <h1 className='text-xl text-[#962927] my-3 font-semibold'>15k Real Weddings</h1>
                    <p className='text-gray-600'>Sed ut perspiciatis unde omnis iste na voluptatem accusantium doloremque laudantium</p>
                </div>
                <div className=' bg-neutral-200 rounded-md p-7 mt-10 shadow-md'>
                    <span className='text-5xl text-[#962927]'><FaClipboardList /></span>
                    <h1 className='text-xl text-[#962927] my-3 font-semibold'>Planning Tools</h1>
                    <p className='text-gray-600'>Sed ut perspiciatis unde omnis iste na voluptatem accusantium doloremque laudantium</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;