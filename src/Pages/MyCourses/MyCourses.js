import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCards from '../Shared/CoursesCards/CourseCards';
import DetailsCard from '../Shared/DetailsCard/DetailsCard';

const MyCourses = () => {
    const choosenCourse = useLoaderData();
    console.log(choosenCourse);
    return (
        <div className='min-h-screen py-10 px-40 ' style={{backgroundImage:'url(https://i.ibb.co/cLT1m2J/eraser-pencil-notepad.jpg)',backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <h1 className='text-4xl border-2 text-violet-600 p-2 bg-black border-violet-600 w-fit mx-auto rounded-lg my-10'>My Courses</h1>
            {choosenCourse.length<1?<h1 className='text-6xl font-semibold text-black my-40 '>No Courses Added yet!</h1>:
            <div>
                {
                    choosenCourse.map(details =>
                        <DetailsCard
                        key={details._id}
                        details={details}
                        />
                        )
                }
            </div>
            }
        </div>
    );
};

export default MyCourses;