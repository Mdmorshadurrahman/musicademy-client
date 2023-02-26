import React from 'react';
import { NavLink } from 'react-router-dom';

const CourseCards = ({course,length}) => {
    const {image,description,duration,price,title,total_lesson,course_id,_id} = course;
    // console.log(course)
    return (
        <div>
            <div className="card lg:card-side h-fit bg-base-100 shadow-xl border-2 border-violet-600">
                <figure className='w-3/5 h-full'>
                    <img src={image} alt="Album"/>
                </figure>
                <div className="card-body w-2/5 h-full">
                    <h1 className="card-title">{course_id}. {title}</h1>
                    <h2></h2>
                    <p>{length>3?description:description.slice(0,100)}</p>
                    {length>3 && <div className="overflow-x-auto">
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
                    </div>}
                    <div className="card-actions justify-center">
                        {length>3?<NavLink to={`/courses/${_id}`}><button className="font-light hover:border-2 hover:rounded-lg hover:border-violet-600 text-2xl hover:text-4xl hover:text-violet-600 hover:bg-black p-2">Enroll</button></NavLink>
                        :<NavLink to={`/courses/${_id}`}><button className="font-light hover:border-2 hover:rounded-lg hover:border-violet-600 text-2xl hover:text-4xl hover:text-violet-600 hover:bg-black p-5">LEARN MORE</button></NavLink>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCards;