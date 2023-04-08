import React, { useState } from 'react';
import { FaAlignJustify } from 'react-icons/fa'
import { ImCancelCircle } from 'react-icons/im'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleIsOpen = () => {
        setIsOpen(value => !value)
    }
    const navItem = 'text-md md:ml-4 hover:text-[#962927] hover:font-bold mb-1 hover:bg-neutral-100 px-5 py-1 rounden-md cursor-pointer font-semibold'
    const item = <ul className='flex md:items-center flex-col lg:flex-row md:justify-center'>
        <Link to='/'>  <li className={`${navItem}`}>Home</li></Link>
        <Link to='/product'>  <li className={`${navItem}`}>Product</li></Link>
        <Link to='/booking'>  <li className={`${navItem}`}>Booking</li></Link>
        <Link to='/about'>  <li className={`${navItem}`}>About</li></Link>
        <Link to='/contact'>  <li className={`${navItem}`}>Contact</li></Link>

        <button className='font-semibold hover:font-bold hover:bg-[#642524] bg-[#962927] rounded-full md:ml-4 mb-1 px-3 md:px-6 text-white py-1 md:py-2'>LogIn</button>
        <button className='font-semibold md:ml-4 mb-1 hover:text-[#962927] hover:font-bold'>SignUp</button>

    </ul>
    return (
        <div className='p-4  w-full bg-neutral-100' data-aos="fade-down" data-aos-duration="1000">
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