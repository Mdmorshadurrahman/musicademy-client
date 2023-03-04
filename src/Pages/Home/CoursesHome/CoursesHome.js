import React, { useEffect, useState } from 'react';
import CourseCards from '../../Shared/CoursesCards/CourseCards';
import { NavLink } from 'react-router-dom';

const CoursesHome = () => {
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('https://musicademy-server.vercel.app/courses')
        .then(res=>res.json())
        .then(data => setCourses(data.courses))
    },[]);

    return (
        <div className='my-40  py-10' style={{ backgroundImage: `url("https://i.ibb.co/DGvLDzH/retro-microphone-isolated-color-background.jpg")`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <h1 className='text-white  text-6xl mb-2'>Courses</h1>
            <p className='text-gray-300 text--xl'>Follow your passion from this moment</p>
        <div className='mt-10 flex flex-col gap-20 w-4/5 mx-auto'>
            {
                courses.map(course =>
                    <CourseCards
                    key={course._id}
                    course={course}
                    length={courses.length}
                    />)
            }
        </div>
        <NavLink to={'/courses'}><button className='text-3xl font-light mt-10 text-white border-2 p-2 rounded-lg hover:bg-violet-600 hover:text-black'>Check All</button></NavLink>
        </div>
    );
};

export default CoursesHome;