import React, { useState } from 'react';
import { FaAlignJustify } from 'react-icons/fa'
import { ImCancelCircle } from 'react-icons/im'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleIsOpen = () => {
        setIsOpen(value => !value)
    }
    const navItem = 'text-md text-white md:ml-4 hover:text-[#962927] transition duration-300 hover:font-bold mb-1 hover:bg-neutral-100 hover:rounded px-5 rounden-md cursor-pointer font-semibold'
    const item = <ul className='flex md:items-center flex-col lg:flex-row md:justify-center'>
        <Link to='/'>  <li><img className='w-[130px] hidden lg:block' src="https://i.ibb.co/58dXFc3/516110992784dndyt51cb-removebg-preview.png" alt="" /></li></Link>
        <Link to='/'>  <li className={`${navItem}`}>Home</li></Link>
        <Link to='/product'>  <li className={`${navItem}`}>Products</li></Link>
        <Link to='/booking'>  <li className={`${navItem}`}>Booking</li></Link>
        <Link to='/about'>  <li className={`${navItem}`}>About</li></Link>
        <Link to='/contact'>  <li className={`${navItem}`}>Contact</li></Link>

        <button className='font-semibold hover:font-bold hover:bg-[#642524] bg-[#F1B7BD] rounded-full md:ml-4 mb-1 px-3 md:px-6 hover:text-white py-1 md:py-2'>LogIn</button>
        <button className={`${navItem}`}>SignUp</button>

    </ul>
    return (
        <div className='px-4 py-2 fixed top-0 z-10  w-full bg-[#962927]' data-aos="fade-down" data-aos-duration="1000">
            <div className='hidden lg:block'>
                {
                    item
                }
            </div>
            <div className='lg:hidden flex justify-center '>
                {
                    isOpen && <div className='absolute top-[75px] z-10  bg-[#962927] rounded-md p-3'>
                        {
                            item
                        }
                    </div>
                }

            </div>
            <div className='lg:hidden flex justify-between'>
                <div><img className='w-[130px]' src="https://i.ibb.co/58dXFc3/516110992784dndyt51cb-removebg-preview.png" alt="" /></div>
                {
                    isOpen ? <div><ImCancelCircle onClick={toggleIsOpen} className='text-2xl cursor-pointer text-white' /></div> :
                        <div><FaAlignJustify onClick={toggleIsOpen} className='text-2xl cursor-pointer text-white' /></div>
                }


            </div>
        </div>
    );
};

export default Navbar;