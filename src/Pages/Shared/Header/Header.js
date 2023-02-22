import React from 'react';
import { Link } from 'react-router-dom';
import { MdQueueMusic } from "react-icons/md";

const Header = () => {
    return (
        <div className='my-10'>
            <div className="lg:navbar ">
                <div className="lg:navbar-start max-lg:justify-between max-lg:flex">
                    <div className="flex justify-center items-center">
                        <Link to={'/'} > 
                        <img className='w-20 mr-5 hover:bg-violet-600 hover:rounded-full cursor-pointer' src="https://i.ibb.co/rdZ8qjY/android-chrome-192x192.png" alt="" /></Link>
                        <h1 className='text-violet-600 text-5xl font-light'>Musicademy</h1>
                    </div>
                    <div className="dropdown dropdown-left flex justify-center items-center">
                        <label tabIndex={0} className="lg:hidden">
                        <MdQueueMusic className=' hover:bg-violet-600 text-5xl hover:text-white text-violet-600 rounded'></MdQueueMusic>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-52">
                            <li className=' hover:text-4xl'><a className='bg-white hover:text-violet-600'>Instruments</a></li>
                            <li className='hover:text-4xl'><a className='bg-white hover:text-violet-600'>Sign In</a></li>
                            <li className='hover:text-4xl'><a className='bg-white hover:text-violet-600'>Sign Up</a></li> 
                        </ul>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex  ">
                    <ul className="menu menu-horizontal px-1 text-2xl bg-base-100 font-extralight ">
                        <li className=' hover:text-4xl'><a className='bg-white hover:text-violet-600 hover:border-violet-600 hover:border-2'>Instruments</a></li>
                        <li className='hover:text-4xl'><a className='bg-white hover:text-violet-600 hover:border-violet-600 hover:border-2'>Sign In</a></li>
                        <li className='hover:text-4xl'><a className='bg-white hover:text-violet-600 hover:border-violet-600 hover:border-2'>Sign Up</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;