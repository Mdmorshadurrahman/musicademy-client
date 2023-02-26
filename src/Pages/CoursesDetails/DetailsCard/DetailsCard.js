import React from 'react';
import { NavLink } from 'react-router-dom';

const DetailsCard = ({details}) => {
    const {image,description,duration,price,title,total_lesson,course_id,_id} = details;
    return (
        <div className='bg-violet-300 w-3/5 py-20' style={{backgroundImage:'url(https://i.ibb.co/ZND2Yf5/blue-painted-vinyl-arrangement-with-copy-space.jpg)',backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <h1 className='text-4xl border-2 text-violet-600 p-2 bg-black border-violet-600 w-fit mx-auto rounded-lg'>Course Details</h1>
            <div className="card w-4/5 mx-auto my-10 bg-base-100 shadow-xl">
             <figure><img src={image} className='w-full' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title my-5">
                {course_id}. {title}
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="overflow-x-auto my-10">
                    <table className="table w-full">
                        {/* head */}
                        <thead className=''>
                        <tr>
                            <th>Lesson</th>
                            <th>Duration</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>{total_lesson}</td>
                            <td>{duration} Weeks</td>
                            <td className=' font-bold'>{price} €</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-actions justify-center">
                    <NavLink ><button className="font-light hover:border-2 hover:rounded-lg hover:border-violet-600 text-2xl hover:text-4xl hover:text-violet-600 hover:bg-black p-2">Add To Cart</button></NavLink>
                </div>
            </div>
        </div>
        </div>
    );
};

export default DetailsCard;