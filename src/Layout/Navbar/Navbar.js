import React, { useState } from 'react';
import { FaAlignJustify } from 'react-icons/fa'
import { ImCancelCircle } from 'react-icons/im'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleIsOpen = () => {
        setIsOpen(value => !value)
    }
    const navItem = 'text-md md:ml-4 mb-1 hover:bg-neutral-100 px-5 py-1 rounden-md cursor-pointer font-semibold'
    const item = <ul className='flex md:items-center flex-col lg:flex-row md:justify-center'>
        <li className={`${navItem}`}>Home</li>
        <li className={`${navItem}`}>Product</li>
        <li className={`${navItem}`}>Booking</li>
        <li className={`${navItem}`}>About</li>
        <li className={`${navItem}`}>Contact</li>
        <button className='font-semibold bg-cyan-400 rounded-full md:ml-4 mb-1 px-3 md:px-6 text-white py-1 md:py-2'>LogIn</button>
        <button className='font-semibold md:ml-4 mb-1 hover:text-indigo-500'>SignUp</button>

    </ul>
    return (
        <div className='p-4  w-full bg-neutral-100 fixed top-0 z-10' data-aos="fade-down" data-aos-duration="1000">
            <div className='hidden lg:block'>

                {
                    item
                }
            </div>
            <div className='lg:hidden flex justify-center '>
                {
                    isOpen && <div className='absolute top-[65px]  bg-white rounded-md p-3'>
                        {
                            item
                        }
                    </div>
                }

            </div>
            <div className='lg:hidden flex justify-between'>
                {
                    isOpen ? <div><ImCancelCircle onClick={toggleIsOpen} className='text-2xl cursor-pointer' /></div> :
                        <div><FaAlignJustify onClick={toggleIsOpen} className='text-2xl cursor-pointer' /></div>
                }


            </div>
        </div>
    );
};

export default Navbar;