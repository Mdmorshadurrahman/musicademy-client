import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { MdQueueMusic } from "react-icons/md";
import { AuthContext } from '../../../context/UserContext';
import { getAuth } from 'firebase/auth';
import { GiShoppingCart } from "react-icons/gi";

const Header = () => {
    const {user,logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const auth = getAuth();
    const handleLogout = () =>{
        logout()
        .then(
            alert('You are Logged out now!')
        )
        .catch(error =>{
            console.error(error);
        })
        navigate('/login')
    }
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
                            <li className=' hover:text-4xl'><NavLink to={'/courses'} className='bg-white text-black hover:text-violet-600'>Courses</NavLink></li>
                            {user?.emailVerified?<>
                            <li className='hover:text-4xl'><NavLink to={`/mycourses/${user.email}`} className='bg-white hover:text-violet-600 text-black hover:border-violet-600 hover:border-2'>My Courses</NavLink></li>
                            <li className='hover:text-4xl'><NavLink to={`/myreviews/${user.email}`} className='bg-white hover:text-violet-600 text-black hover:border-violet-600 hover:border-2'>My Reviews</NavLink></li>
                            <li className=''><p className='bg-white text-violet-600 border-2 border-violet-600'>Hi, {user.displayName?user.displayName.split(" ")[0].toUpperCase():user.email.toUpperCase()}</p></li>
                            <li className='hover:text-4xl'><button onClick={handleLogout} className='bg-white hover:text-violet-600 hover:border-violet-600 hover:border-2'>Logout</button></li>
                            </>:<>
                            <li className='hover:text-4xl'><NavLink to={'/login'} className='bg-white text-black hover:text-violet-600 hover:border-violet-600 hover:border-2'>Sign In</NavLink></li>
                            <li className='hover:text-4xl'><NavLink to={'/register'} className='bg-white text-black hover:text-violet-600 hover:border-violet-600 hover:border-2'>Sign Up</NavLink></li> 
                            </>
                            }
                        </ul>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex  ">
                    <ul className="menu menu-horizontal px-1 text-2xl bg-base-100 font-extralight ">
                        <li className=' hover:text-4xl'><NavLink to={'/courses'} className='bg-white text-black hover:text-violet-600 hover:border-violet-600 hover:border-2'>Courses</NavLink></li>
                        {user?.emailVerified?<>
                            <li className='hover:text-4xl'><NavLink to={`/mycourses/${user.email}`} className='bg-white text-black hover:text-violet-600 hover:border-violet-600 hover:border-2'>My Courses</NavLink></li>
                            <li className='hover:text-4xl'><NavLink to={`/myreviews/${user.email}`} className='bg-white text-black hover:text-violet-600 hover:border-violet-600 hover:border-2'>My Reviews</NavLink></li>
                            <li className=''><p className='bg-white text-violet-600 border-2 border-violet-600'>Hi, {user.displayName?user.displayName.split(" ")[0].toUpperCase():user.email.toUpperCase()}</p></li>
                            <li className='hover:text-4xl'><button onClick={handleLogout} className='bg-white hover:text-violet-600 hover:border-violet-600 hover:border-2'>Logout</button></li>
                            </>:<>
                            <li className='hover:text-4xl'><NavLink to={'/login'} className='bg-white text-black hover:text-violet-600 hover:border-violet-600 hover:border-2'>Sign In</NavLink></li>
                            <li className='hover:text-4xl'><NavLink to={'/register'} className='bg-white text-black hover:text-violet-600 hover:border-violet-600 hover:border-2'>Sign Up</NavLink></li> 
                            </>
                            }
                            
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;